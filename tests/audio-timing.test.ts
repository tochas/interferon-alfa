import {it,expect} from 'vitest';
import {tourIndex,MuseumClock} from '../src/core';
import measurements from './fixtures/audio-measurements.json';
it('cada intervalo alcanza para su narración y transición',()=>{
 const durations=Array.from({length:11},(_,i)=>measurements.find(x=>x.id===`tour-${i}`)!.duration);
 const weights=durations.map(d=>d+1),total=weights.reduce((a,b)=>a+b,0);expect(total).toBeLessThanOrEqual(88);
 let start=0;for(let i=0;i<11;i++){const segment=88*weights[i]/total;expect(segment).toBeGreaterThan(durations[i]+.9);expect(tourIndex((start+.01)*1000,88,11,weights)).toBe(i);start+=segment;}
});
it('reloj ponderado mantiene pausa y reinicio',()=>{const c=new MuseumClock(10,0);c.weights=[1,3];expect(c.tick(0,2)).toBe(0);expect(c.tick(2600,2)).toBe(1);c.paused=true;expect(c.tick(5000,2)).toBe(-1);c.interact(6000);expect(c.start).toBe(null)});
