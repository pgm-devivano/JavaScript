const v = 230;
const i = 2.85;
const t = 0.02;
const r = v / i;
const p = v * i;
const f = 1 / t;

const message = `
The Resistance of the resistor: R = v / i => R = ${v} / ${i} => R = ${r} Ohm.
Power: P = v * i => P = ${v} * ${i} => P = ${p} Watt.
Frequency : F = 1 / t => F = ${1} / ${t} => F = ${f} Hertz.
`
console.log(message);
