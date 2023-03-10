// function Student(fullname, age, email, gender){
//     this.fullname = fullname;
//     this.age = age;
//     this.email = email;
//     this.gender = gender;
//     this.greeting = function(){
//         return `Hello, My name is ${this.fullname}, ${this.age} year olds`
//     }
//     this.getEmail = function(){
//         return this.email;
//     }
// }


class Student {
    constructor(fullname, age, email, gender) {
        this.fullname = fullname;
        this.age = age;
        this.email = email;
        this.gender = gender;
    }
    greeting(){
        return `Hello, My name is ${this.fullname}, ${this.age} year olds`
    }
    static slogen(){
        return 'Still breath still alive';
    }
}

class StudentGraduate extends Student{
    constructor(fullname, age, email,gpa, gender){
        super(fullname, age, email, gender);
        this.gpa = gpa;
    }
    // hello(){
    //     return `Hello, My name is ${this.fullname}, ${this.age} year olds, GPA: ${this.gpa}`
    // }
    greeting(){
        return `${super.greeting()}, GPA: ${this.gpa}`;
    }
}


let anh = new Student("Trọng Anh", 18, "anh@gmail.com", true);
let toan = new StudentGraduate("Toàn", 18, "toan@gmail.com", 3.8,true);

// console.log(Student.greeting());
console.log(toan.greeting());
console.log(StudentGraduate.slogen());
// console.log(toan.hello());

Math.random()

let arr = new Array()