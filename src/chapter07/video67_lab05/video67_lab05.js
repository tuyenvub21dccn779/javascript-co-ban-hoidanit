console.log("video 67 lab 05");

const fetchData = async () => {
  const res = await fetch("http://localhost:8000/users");
  const data = await res.json();

  console.log(data);
  const tbodyElement = document.getElementById("users").querySelector("tbody");
  const innerBodyTableString = data
    .map((item) => {
      return `<tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.email}</td>
    </tr>`;
    })
    .join("\n");
  console.log(innerBodyTableString);

  console.log(tbodyElement);
  tbodyElement.innerHTML = innerBodyTableString;
};

fetchData();
