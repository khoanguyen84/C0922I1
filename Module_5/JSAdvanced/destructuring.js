// let jobs = ["java", "react", "angular", function(){ console.log('hello');}];
// // let java = jobs[0];
// // let react = jobs[1];
// // let angular = jobs[2];
// let [j, r, a, hello, five] = jobs;

// // hello()
// // jobs[3]()
// console.log(j, r, a, hello, five);


let obj = {
    fullname: "Khoa",
    age: 18,
    greeting() {
        return `I'm ${fullname}, I'm ${age} years old.`
    }
}

let { age } = obj;

// console.log(greeting());
console.log(age);