import fs from 'node:fs';import assert from 'node:assert/strict';
const read=n=>fs.readFileSync(`public/models/${n}`,'utf8');
const atoms=s=>s.split(/\r?\n/).filter(l=>l.startsWith('ATOM')).map(l=>({chain:l[21],resi:+l.slice(22,26),resn:l.slice(17,20),name:l.slice(12,16).trim(),x:+l.slice(30,38),y:+l.slice(38,46),z:+l.slice(46,54)}));
const main=atoms(read('ifn-alpha2a.pdb')),complex=atoms(read('ifn-receptors.pdb')),source=atoms(read('3SE3.pdb'));
assert.equal(main.filter(a=>a.name==='CA').length,165);assert.equal(new Set(main.map(a=>a.chain)).size,1);
for(const [a,b] of [[1,98],[29,138]]){const x=main.find(x=>x.resi===a&&x.name==='SG'),y=main.find(x=>x.resi===b&&x.name==='SG');const d=Math.hypot(x.x-y.x,x.y-y.y,x.z-y.z);assert(d>1.9&&d<2.2)}
assert.deepEqual([...new Set(complex.map(a=>a.chain))].sort(),['A','R','S']);assert.equal(complex.find(a=>a.chain==='A'&&a.resi===57).resn,'TYR');assert.equal(complex.find(a=>a.chain==='A'&&a.resi===58).resn,'ASN');assert.equal(complex.find(a=>a.chain==='A'&&a.resi===61).resn,'SER');
const remap={A:'B',R:'A',S:'C'};for(const a of complex){const original=source.find(x=>x.chain===remap[a.chain]&&x.resi===a.resi&&x.name===a.name);assert(original);assert.equal(a.x,original.x);assert.equal(a.y,original.y);assert.equal(a.z,original.z)}
assert.equal((read('1ITF.pdb').match(/^MODEL/gm)||[]).length,24);
assert(read('3SE3.pdb').includes('APPLY THE FOLLOWING TO CHAINS: A, B, C'));
const cif=read('3SE3-assembly1.cif');assert(cif.includes('_atom_site.Cartn_x'));assert(cif.includes('human IFNa2-IFNAR ternary complex'));
const fields=cif.split(/\r?\n/).filter(l=>l.startsWith('_atom_site.')).map(l=>l.trim());
const index=name=>fields.indexOf('_atom_site.'+name);
const assembled=new Set(cif.split(/\r?\n/).filter(l=>l.startsWith('ATOM ')).map(l=>{const v=l.trim().split(/\s+/);return [v[index('auth_asym_id')],+v[index('auth_seq_id')],v[index('auth_atom_id')],+v[index('Cartn_x')],+v[index('Cartn_y')],+v[index('Cartn_z')]].join('|')}));
for(const a of complex)assert(assembled.has([remap[a.chain],a.resi,a.name,a.x,a.y,a.z].join('|')),'Coordenada ausente del ensamblaje mmCIF descargado');
console.log('PASS: 165 residuos, 2 disulfuros, 24 conformeros RMN, 3 cadenas del complejo, sustituciones YNS y 4448 coordenadas conservadas.');
