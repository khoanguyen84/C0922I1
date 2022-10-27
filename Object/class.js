// ECMA Script (ES 6)
// code convension

// class
function Student(fullname, age, email, gender){
    this.fullname = fullname;
    this.age = age;
    this.email = email;
    this.gender = gender;
    this.greeting = function(){
        return `Hello, My name is ${this.fullname}, ${this.age} year olds`
    }
    this.getEmail = function(){
        return this.email;
    }
}

//object

let toan = new Student("Toàn Trương", 18, "toan@gmail.com", true);
let phuoc = new Student("Phước Châu", 18, "phuoc@gmail.com", true);

console.log(toan.getEmail());
console.log(phuoc.getEmail());