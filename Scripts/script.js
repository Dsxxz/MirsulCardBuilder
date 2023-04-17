const btn = document.getElementById("btn")
const xml = new XMLHttpRequest()
xml.open("GET","https://lord3dfx.github.io/MirsulCardBuilder/cards")
function btnclick(){
    alert(xml.status)
}

btn.addEventListener('click', btnclick)