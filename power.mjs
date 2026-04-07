function power(x,n) { //x는 밑수, n지수
    if(n === 0) return 1;
    return power (x,n-1) * x;

}
console.log(power(2,5));