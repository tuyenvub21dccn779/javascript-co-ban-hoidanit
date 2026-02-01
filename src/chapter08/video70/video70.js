console.log("video 70");

const tbodyElement = document.querySelector("#users tbody");

const fetchData = async () => {
  const res = localStorage.getItem("todoLists");
  const data = JSON.parse(res);

  console.log(data);

  if (data && data.length) {
    data.forEach(function(user) { 
      const trElement = document.createElement("tr");
      trElement.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td></td>
      `;
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Xóa";
      deleteBtn.setAttribute("data-id", user.id);
      trElement.lastElementChild.appendChild(deleteBtn);
      tbodyElement.appendChild(trElement);
      deleteBtn.addEventListener("click", function(e) {
        e.preventDefault();
        
        const newData = [];
        for (let i = 0; i < data.length; i++) {
          if (user.id != data[i].id) {
            newData.push(data[i]);
          }
        }
        localStorage.setItem("todoLists", JSON.stringify(newData));
        trElement.remove();
      })
    });
  }
};

fetchData();
