class MyMath{
    static PI = 3.14;
    static sum(n1, n2, n3){
        return (n1 + n2 + n3)/3;
    }

    power(a, b){
        return a**b;
    }
}

console.log(MyMath.PI);
console.log(MyMath.sum(8,9,10));

let math = new MyMath()
console.log(math.power(5,3));