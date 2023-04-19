const arr = document.querySelector("#arr")

    fetch('https://cardbuilder.onrender.com/cards')
        .then(response =>  response.json())
        .then(data => {
            for (item of data)
            {
                addCard(item.cardName, item.status)
            }
            console.log(data)
        })

function addCard(name, status){
    const arrTitle = document.createElement("p")
    const arrStatus = document.createElement("span")
    const br = document.createElement("hr")
    arr.append(arrTitle, arrStatus,br)
    arrTitle.innerText = name
    arrStatus.innerText = status
}
