// js
// Add event listeners to capture form data and override a form's default behavior
// Fetch data based on what the user types into that form
// Display that data on the page


const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        // accessing the value using event.target
        // console.log(event.target.children[1].value);
        // Accessing the value using the form's id
        // console.log(inputForm.children[1].value);
        // OR
        // console.log(document.querySelector("#searchByID").value);

        const input = inputForm.children[1];
        console.log(input.value);

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(res => res.json())
        .then(data => {
            const title = document.querySelector("#movieDetails h4");
            const summary = document.querySelector("#movieDetails p");
            title.innerText = data.title;
            summary.innerText = data.summary;
        });
    });
  
}

document.addEventListener('DOMContentLoaded', init);