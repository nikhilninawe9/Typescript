var message = "Hello users";
var n = "I  am the game!..";
console.log(message + n);
// ==================Datatypes================================//
var id = 10;
var sname = "nikhil";
var course = "java";
var isEnabled = false;
var data = 200.5;
var info = 10;
var info1;
console.log(id);
console.log(sname);
console.log(course);
console.log(isEnabled);
console.log(data);
console.log(info);
console.log(info1); //undefined
var model;
// model = info;
// ==================Operators================================//
var x = 10, y = 98;
console.log("Data is " + x + " and " + y);
var add = x + y;
console.log(add);
var exists = x < y && x++ <= 23;
console.log(exists);
var check = x < 0 ? "ok" : "not ok";
console.log(check);
// ==================Conditional================================//
var userid = 200;
if (userid > 12 && userid <= 200) {
    console.log("condition 1");
}
else if (userid > 200) {
    console.log("condition 2");
}
else {
    console.log("nothing matched!..");
}
var color = "red";
switch (color) {
    case "red":
    case "none":
        console.log("good option");
        break;
    case "blue":
        console.log("fine");
    default:
        console.log("choose 1 color");
        break;
}
// ==================Loops================================//
for (var i_1 = 0; i_1 <= 100; i_1++) {
    console.log(i_1);
}
var arr = [20, 30, 40, 2324, 43, 123, 1];
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var num = arr_1[_i];
    console.log(num);
}
var i = 0;
var max = 5;
while (i <= max) {
    console.log(i);
    i++;
}
var c = [213, "sdsd", 22];
for (var _a = 0, c_1 = c; _a < c_1.length; _a++) {
    var d = c_1[_a];
    console.log(d);
}
var v = [23123, "hfdshkjfh", 123.009];
for (var _b = 0, v_1 = v; _b < v_1.length; _b++) {
    var y_1 = v_1[_b];
    console.log(y_1);
}
// ==================Objects================================//
var employee = {
    id: 10,
    name: "nik",
    salary: 200.0,
    dept: "dev"
};
// or
var arre = {
    id: 1,
    name: "ansh"
};
console.log(employee.id);
// ==================Functions================================//
function add1(a, b) {
    console.log(a + b);
}
function message1(name) {
    console.log("Hello: " + name);
}
function aisehi(x, y) {
    return x + y;
}
// ==================Functions================================//
var addFunction = function (x, y) { return x + y; };
addFunction(123, 444);
//z = default
function addA(x, y, z) {
    if (z === void 0) { z = 90; }
    return x + y + z;
}
//dept? is optional
function display(name, dept) {
    if (dept != undefined) {
        console.log(name + " - " + dept);
    }
    else {
        console.log(name + " - Dev");
    }
}
display("ajay", "testing");
display("ajay");
var total = 0;
function positions() {
    var ids = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ids[_i] = arguments[_i];
    }
    ids.forEach(function (id) { return (total = total + id); });
}
positions(10, 20, 30, 40); // no need to pass array
console.log(total);
