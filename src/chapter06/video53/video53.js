console.log("video 53");

const myBtnElement = document.getElementById("myBtn");
const backBtnElement = document.getElementById("backBtn");
const myTextElement = document.getElementById("myText");

myBtnElement.addEventListener("click", () => {
  console.log("click me");
  myTextElement.style.color = "red";
  myTextElement.style.backgroundColor = "green";
  myTextElement.classList.add("hoidanit", "eric");
});

backBtnElement.addEventListener("click", () => {
  console.log("click me");
  myTextElement.style.color = "black";
  myTextElement.style.backgroundColor = "unset";
  myTextElement.classList.remove("hoidanit", "eric");
});

console.log(myBtnElement, myTextElement, backBtnElement);
