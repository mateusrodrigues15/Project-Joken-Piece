const winner = document.querySelector('.winner')
const lose = document.querySelector('.lose')
const draw = document.querySelector('.draw')
const result = document.querySelector('#result')
const image = document.querySelector('#logo-img')

let number_draw = 0
let number_your = 0
let number_ia = 0

const click_item = (choice_any) => {

    result_game(choice_any, ia_choice())
}

const ia_choice = () => {

    const ia_name_choice = ['stone', 'paper', 'scissors']
    const random_number = Math.floor(Math.random() * 3)
    return (ia_name_choice[random_number])
}

const result_game = (yourChoice, iaChoice) => {

    if (yourChoice === iaChoice) {

        number_draw++
        draw.innerHTML = number_draw
        result.innerHTML = 'Empate &#x1F62E;'
        image.src = './assets/Draw.gif'
    }

    else if (yourChoice === 'stone' && iaChoice === 'scissors' ||
        yourChoice === 'paper' && iaChoice === 'stone' ||
        yourChoice === 'scissors' && iaChoice === 'paper') {

        number_your++
        winner.innerHTML = number_your
        result.innerHTML = 'Piratas Venceram &#x1F480;'
        image.src = './assets/winner.gif'
    }

    else {
        number_ia++
        lose.innerHTML = number_ia
        result.innerHTML = 'Marinha Venceu &#x2693;'
        image.src = './assets/lose.gif'
    }
}



