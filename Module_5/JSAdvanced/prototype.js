// prototype = nguyên mẫu
class MyMath{
    sum(...rest){
        let total = 0;
        for(let i = 0; i < rest.length; i++){
            total += rest[i]
        }
        return total;
    }
}

MyMath.prototype.times = function(...rest){
    let total = 1;
        for(let i = 0; i < rest.length; i++){
            total *= rest[i]
        }
        return total;
}

let myMath = new MyMath();
console.log(myMath.times(4,6,6,3,3,56,6,4,3,3,32));


Array.prototype.isEmpty = function(){
    
}