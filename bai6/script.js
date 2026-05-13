var a = 1;
var b = 0;
var operation = "chia";
var result = null;
if (operation == "cong") {
  result = a + b;
} else if (operation == "tru") {
  result = a - b;
} else if (operation == "nhan") {
  result = a * b;
} else if (operation == "chia") {
  if (b == 0) {
    console.log("b khong duoc bang 0");
  } else result = a / b;
}
console.log(result);

var n = 5;
var sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}

function hello(fullname) {
  alert("Hello " + fullname);
}

function phepNhan(a, b) {
  console.log(a * b);
}
