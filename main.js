let START = document.querySelector('.START')
let STOP = document.querySelector('.STOP')
let CLEAN = document.querySelector('.CLEAN')
let minute = document.querySelector('.minute')
let sekund = document.querySelector('.sekund')

let interval;
let s = 0
let m = 0
let c = 0
START.addEventListener('click', () => {
    interval = setInterval(() => {
        s++
        if (s <= 9 ) {
            sekund.innerHTML = `0${s}`
        } else {
            sekund.innerHTML = s
        }

        if (s == 60) {
            m++
            minute.innerHTML = m
            s = 0
            sekund.innerHTML = s

            if (m <= 9) {
                minute.innerHTML = `0${m}`
            } else {
                minute.innerHTML = m
            }
        }
    }, 100)
})

STOP.addEventListener('click', () => {
    clearInterval(interval)
})

CLEAN.addEventListener('click', () => {
    clearInterval(interval)
    m = 0
    s = 0
    minute.innerHTML = '00'
    sekund.innerHTML = '00'
})