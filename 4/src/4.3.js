const a = 1;
const b = 2;
const c = 3;
const d = 4;

console.log(a);

setTimeout(() => {
  console.log(b);
}, 0);

console.log(c);

setTimeout(() => {
  console.log(d);
}, 2000);
