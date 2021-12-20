const res = document.getElementById("res");
// const nums = document.getElementsByName("num");
// const ops = document.getElementsByName("op");
const btns = document.getElementsByClassName("btn");
const eq = document.getElementById("eq");

Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(btn.value);
    res.value += btn.value;
  });
});

eq.addEventListener("click", (e) => {
  res.value = eval(res.value);
});

// ops.forEach((op) => {
//   console.log(op.value);
// });
