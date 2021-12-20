const btn = document.querySelector("#v2");
btn.onclick = () => {
  console.log("YYOU CLICKKED ME AGAINNNN!!!");
  console.log("AHAHHAHAHHHHHH");
};

btn.onmouseenter = () => {
  console.log("AHHHHH YOU ARE GOINGGG TO CLICK ME AGAINNNN!!!!");
  console.log("STAY AWAYYY FROM MEEEE!!");
};

const btn3 = document.querySelector("#v3");

btn3.addEventListener("dblclick", () => {
  console.log("AHHH YOU CLICKED ME TWICEEEE!!!!");
});

btn3.onmouseenter = () => {
  console.log("Stay away from me!!");
};
