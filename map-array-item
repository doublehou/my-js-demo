let demo = [1,[2,'3'],[4,'5','abc',[true,'abcd',6,'7',[8,'9']]]];
let res = [];
function getArrItem(arr) {
  arr.map(item => Array.isArray(item) ? getArrItem(item) : res.push(item) );
}
getArrItem(demo)
console.log(res);
