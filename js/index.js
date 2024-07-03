var input = document.querySelector("input");
var btns = document.querySelectorAll(".btn-op");
var btnDel = document.querySelector(".btn-del");
var btnC = document.querySelector(".btn-c");
var equalBtn = document.querySelector(".equal-btn");
var btnOperate = document.querySelectorAll(".btn-operat");
var opBtn = document.querySelectorAll("#op-btn");

btnOperate.forEach((btn) => {
  btn.addEventListener("click", (t) => {
    var value = input.value;
    if (value == "") {
      value = "";
    } else {
      input.value += t.target.innerText;
    }
  });
});

btns.forEach((x) => {
  x.addEventListener("click", (t) => {
    input.value += t.target.innerText;
  });
});

btnDel.addEventListener("click", () => {
  input.value = "";
});

btnC.addEventListener("click", () => {
  var value = input.value;
  input.value = value.slice(0, -1);
});

equalBtn.addEventListener("click", () => {
  var value = input.value;
  var lastNum = value.slice(-1);
  if (!value == "" && !isNaN(lastNum)) {
    input.value = eval(value);
  }
});
