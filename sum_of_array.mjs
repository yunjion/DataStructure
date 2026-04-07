//for ansdmf dldydgotj qodufdml gkqrP 
// function sumArray(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.lengh; i++) {
//          sum+=arr[i];
//     }
//    return sum;
// }

// console.log(sumArray(arr));

function sumArray(arr) {
    if(arr.length === 1) return arr[0];
    return arr[arr.length-1] + sumArray(arr.slice(0,-1));
}

let arr = [1,2,3,4,5];
console.log(sumArray(arr));

