// const euclidean = function(num1,num2) {
//     return (num2 === 0) ? num1 : euclidean(num1,num1%num2)
//     }

// const euclidean = (num1,num2) => {
//     return (num2 === 0) ? num1 : euclidean(num1,num1 % num2)
//     }

const euclidean = (num1,num2) => {
    return (num2 === 0) ? num1 : euclidean(num1,num1 % num2)
    }
console.log(euclidean(78,66));
