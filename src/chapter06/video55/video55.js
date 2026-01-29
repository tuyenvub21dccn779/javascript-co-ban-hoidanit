console.log("video 55");

const btn = document.getElementById("submitBtn");
const input = document.getElementById("name");

const preElement = document.getElementById("prev");
const preName = localStorage.getItem("hoidanit");

if (preName) {
  preElement.innerHTML = `<b>${preName}</b>`;
}

console.log(input);

btn.addEventListener("click", () => {
  //   console.log(input.value);
  localStorage.setItem("hoidanit", input.value);
  document.getElementById("message").innerHTML = `<b>${input.value}</b>`;
});
