
function strlength(arr){
   if(arr.length === 0) return 0;
   return strlength(arr.slice(0,-1)) +1 ;
}
let str = "abcde";

console.log(strlength(str));