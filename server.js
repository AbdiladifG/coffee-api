const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const coffee = {//object
    'americano': {
        'cofeeDescription': 'Cold or hot water and espresso.',

        'ingredientDescription': 'Espresso and hot water, and ice for an iced americano',

        'roast': 'Dark or medium-dark roast.'
    },
    'macchiato': {
        'cofeeDescription': 'An espresso-based coffee drink that\'s made by topping espresso with a small amount of steamed or foamed milk.',

        'ingredientDescription': 'Pour a shot of espresso and then add a dollop of frothy milk foam.',

        'roast': 'Dark or medium-dark roast.'
    },
    'caffe latte': {
        'cofeeDescription': 'Coffee drink of Italian origin made with espresso and steamed milk.',

        'ingredientDescription': 'Combine espresso with steamed milk and a small amount of foam.',

        'roast': 'Dark or medium-dark roast.'
    },
}
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/main.js', (request, response) => {
    response.sendFile(__dirname + '/main.js')
})

app.get('/api/:name', (request, response) => {
    const choice = request.params.name.toLowerCase()

    if (coffee[choice]) {
        response.json(coffee[choice])
    } else {
        response.json(coffee['unknown'])
    }

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}! Betta Go Catch It!`)
})

