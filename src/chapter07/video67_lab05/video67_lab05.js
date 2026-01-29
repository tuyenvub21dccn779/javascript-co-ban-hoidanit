console.log("video 67 lab 05");

const fetchData = async () => {
  const res = await fetch("http://localhost:8000/users");
  const data = await res.json();

  console.log(data);
  const tbodyElement = document.querySelector("#users tbody");
  if (data && data.length) {
    data.forEach((user, index) => {
      tbodyElement.innerHTML += `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
        </tr>
        `;
    });
  }
};

fetchData();
