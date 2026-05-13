function phepTinh(pt) {
  let a = document.getElementById("giatriA").value; // Number(document.getElementById("giatriA").value)
  let b = document.getElementById("giatriB").value;

  a = parseInt(a);
  b = parseInt(b);

  var result = null;

  if ((pt = "cong")) {
    result = a + b;
  } else if ((pt = "tru")) {
    result = a - b;
  } else if ((pt = "nhan")) {
    result = a * b;
  } else if ((pt = "chia")) {
    if (b == 0) {
      document.getElementById("result").innerHTML = "B khong duoc bang 0";
      return;
    } else {
      result = a / b;
    }
  }
  document.getElementById("result").innerHTML = result;
}
