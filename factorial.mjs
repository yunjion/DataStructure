// for문을 이용해서 팩토리얼 구하기 - 상향식 방법
// function factorial() {
// let sum= 1;
// for(let i = 1; i <= 5; i++) {
//     sum *= i;
//     }
//     return sum;
// }
// console.log(factorial(5));

//재귀호출을 이용해서 팩토리얼 구하기 - 하향식 방법
function factorial(number) { 
    if(number === 1) return 1;
    return number * factorial(number-1);
}
console.log(factorial(5));

