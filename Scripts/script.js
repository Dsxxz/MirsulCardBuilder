const btn = document.getElementById("btn")
let resp = await fetch('https://api.render.com/deploy/srv-cgun9bgdh87vhrlp1lgg?key=qjY601xbdT4', { mode: 'no-cors'})
function btnclick(){
    alert(resp.status)
}

btn.addEventListener('click', btnclick)
