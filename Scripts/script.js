const btn = document.getElementById("btn")
function btnclick(){
    fetch('https://cardbuilder.onrender.com/')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
           alert(data);
        });
}

btn.addEventListener('click', btnclick)