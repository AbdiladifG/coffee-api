document.querySelector('button').addEventListener('click', getCoffee)

function getCoffee(){
    const coffee = document.querySelector('input').value
    const url = `/api/${coffee}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#cofeeDescription').innerText = data.cofeeDescription
        document.querySelector('#ingredientDescription').innerText = data.ingredientDescription
        document.querySelector('#roast').innerText = data.roast
    })
}
