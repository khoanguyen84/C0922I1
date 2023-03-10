// clourse

function parent() {
    let name = "Khoa";
    return {
        changeName(newName) {
            name = newName;
        },
        getName() {
            return name;
        }
    };
}

let app = parent();
let name = "Trọng Anh";

app.changeName("Khoa Nguyễn");
console.log(app.getName());