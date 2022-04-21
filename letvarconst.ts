function sample() {
  var id = 10;
  if (id >= 10) {
    var code = "pen";
    console.log(code);
  }
  console.log(code);
}

sample(); // pen pen
// note: creating the variable as var inside or outside block is always globle. it is used within the complete function block

function sample1() {
  var id = 10;
  if (id >= 10) {
    let code = "pen";
    //  var code = "pen";

    const d = 90;
    //   d = 89; // it shows error as it is final constant
    console.log(code);
  }
  //  console.log(code); // let is used inside the block only i..e local variable shows error.
}

// var is strictly not recommended in typescript.
