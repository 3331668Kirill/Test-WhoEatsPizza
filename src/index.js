import './styles.scss'

document.getElementById('app').innerHTML = `<p>Click 👆 this button</p>`

document.getElementById('load-btn').addEventListener('click', () => {
    document.getElementById('app').innerHTML = 'waiting...'

    fetch('https://gp-js-test.herokuapp.com/pizza')
        .then((response) => response.json())
        .then((data) => {
            let arr = data.party
            return arr
        }).then(res => {
        const allPerson = res.length
        let quantity = res.filter(t => t.eatsPizza).length
        let degree = 360 / quantity
        let step = 0

        const section = document.getElementById('chart')

        document.getElementById('app').innerHTML = `There are ${allPerson} person in the party. Pizza like ${quantity} person`
        for (let i = 0; i < quantity; i = i + 1) {
            section.innerHTML += `<div id="line + ${i}" class="triangle" style="transform:rotate(${-step}deg); border-bottom: solid black 2px">
        <div class="circle" style=" border-left: black solid 2px"> </div>
    </div>`
            step = step + degree

        }

    })
})

