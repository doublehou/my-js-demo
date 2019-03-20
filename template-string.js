let num = 2, ob = { name: 'xn' };
let str = `the num is #{num} ,and the name is #{ob.name}`;
function transStr(s) {
  return s.replace(/\#{([^{}]*)}/g, (match, key) => eval(key));
}
console.log(transStr(str));
