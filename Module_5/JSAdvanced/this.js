if(Array.prototype.isEmpty == undefined){
    Array.prototype.isEmpty = function(){
        return this.length == 0
    }
}
if(Array.prototype.includes_2 == undefined){
    Array.prototype.includes_2 = function(value){
        for(let i = 0; i < this.length; i++){
            if(this[i] == value){
                return true;
            }
        }
        return false;
    }
}

// this = context

// let numbers = [];
let numbers_2 = [3,2,3,4]

// console.log(numbers.isEmpty());
// console.log(numbers_2.isEmpty());

console.log(numbers_2.includes_2(5));
console.log(numbers_2.includes_2(4));