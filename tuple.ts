// tuple = fixed size

let info: [string, number];
info = ["amar", 32];
console.log(info);

let color: [string, string, string];
color = ["red", "blue", "black"];
console.log(color[1]);

// enum= group of named constants.
enum result {
  PASS,
  FAIL,
  ABSENT,
}

console.log(result.FAIL);
