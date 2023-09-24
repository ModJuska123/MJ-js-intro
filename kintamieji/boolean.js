console.clear();
/*

Boolean logine reiksme
&& - visi turi buti true, jog gauti true
|| - bent vienas turi buti true, joga gauti true
*/

const arpilnametis = true;
const arlyja = false;
const arsauleta = true;
const arnaktis = false;

const count = (false + false + true) * (true + false);
console.log('>>>', count);

const a = true && false;
console.log('a:', a);

const b = true || false;
console.log('b:', b);

const c = true == false;
console.log('c:', c);

const d = true != false;
console.log('d:', d);

const e = true && (false || true);
console.log('e:', e);

const f = true && false || true;
console.log('f:', f);

