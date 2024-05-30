
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let statusEl = document.getElementById("status-el")
let count = 0
let sav = 0



function increment() {

    count = count + 1
    countEl.innerText = count
}

function save() {
    let rando = count + ' , '
    saveEl.textContent += rando
    sav = +1


    if (countEl.innerText >= 7 && countEl.innerText <= 12) {
        statusEl.textContent = "Healthy Intake"
    }
    else if (countEl.innerText < 4) {
        statusEl.textContent = "Alarmingly LOW intake."
    }

    else if (countEl.innerText >= 13) {
        statusEl.textContent = "That's too much💀"
    }
    else {
        statusEl.textContent = "Not heathly Intake."

    }
    if (sav > 7) {
        saveEl.textContent = "0"
    }

    countEl.innerText = 0
    count = 0


}
