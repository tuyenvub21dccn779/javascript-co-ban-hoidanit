console.log("video 52");

const myBtnElement = document.getElementById("myBtn");
const backBtnElement = document.getElementById("backBtn");

const myTextElement = document.getElementById("myText");

myBtnElement.addEventListener("click", () => {
  console.log("you click my button");
  //   myTextElement.innerText = "Just change the content with hoidanit";
  myTextElement.innerHTML =
    "<strong> Chào bạn, </strong>, <em>học lập trình với hoidanit!</em>";
});

backBtnElement.addEventListener("click", () => {
  myTextElement.innerHTML = "video 52";
});
console.log(myBtnElement, myTextElement);
