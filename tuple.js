// tuple = fixed size
var info;
info = ["amar", 32];
console.log(info);
var color;
color = ["red", "blue", "black"];
console.log(color[1]);
var result;
(function (result) {
    result[result["PASS"] = 0] = "PASS";
    result[result["FAIL"] = 1] = "FAIL";
    result[result["ABSENT"] = 2] = "ABSENT";
})(result || (result = {}));
console.log(result.FAIL);
