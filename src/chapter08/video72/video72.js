(function() {

    async function fetchData(){
        const res = await fetch("http://localhost:8000/blogs");
        const data = await res.json();
        
        data.forEach(function(blog){
            const trElement = document.createElement("tr");
            trElement.innerHTML = `
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td><button>Xóa</button></td>
            `;
            const deleteBtn = trElement.querySelector("button");
            deleteBtn.addEventListener("click", function(e) {
                e.preventDefault();
                console.log(blog);

                (async () => {
                    const rawResponse = await fetch('http://localhost:8000/blogs/' + blog.id, {
                        method: 'DELETE',
                        headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                        },
                    });
                    const content = await rawResponse.json();
                    trElement.remove();
                    console.log(content);
                })();
            });
            tbody.appendChild(trElement);
        });
    };

    const tbody = document.querySelector("#todoList tbody");
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const contentInput = document.getElementById("content");
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", function(e) {
        e.preventDefault();

        const title = titleInput.value;
        const author = authorInput.value;
        const content = contentInput.value;

        const newBlog = {
            title: title,
            author: author,
            content: content
        };

        (async () => {
            const rawResponse = await fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBlog)
            });
            const content = await rawResponse.json();
            
            console.log(content);
            tbody.innerHTML = "";
            fetchData();
        })();
    });
    
    
    fetchData();



})();