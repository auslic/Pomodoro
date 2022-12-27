const clock = document.querySelector('[data-clock]')
const buttonStart = document.querySelector('[data-button-start]')
const buttonStop = document.querySelector('[data-button-stop]')

// *** TENTATIVA COM SETINTERVAL PARA SEGUNDOS
// let cont = 25

// const timer = () => {
//     clock.textContent = cont
//     cont--
// }

// const clickTimer = () => {
//     setInterval(timer, 1000)
// }

// buttonStart.addEventListener('click', clickTimer)


let pomodoro = ''

let minutesPomodoro = 25
let secondsPomodoro = 0

const timer = () => {
    clock.textContent = pomodoro   

    console.log (minutesPomodoro, secondsPomodoro)

    if(secondsPomodoro == 0){
        secondsPomodoro = 59
        minutesPomodoro --        
    }    

    pomodoro = `${minutesPomodoro}:${secondsPomodoro}`

    secondsPomodoro --    
    
    if (minutesPomodoro < 0){
        secondsPomodoro = 0
        minutesPomodoro = 0

        pomodoro = `${minutesPomodoro}:${secondsPomodoro}`
        clock.textContent = pomodoro 

        clearTimer()
    }
}

const clickTimer = () =>{
    let id = setInterval(timer, 0.5)

    clearTimer = () =>{
        clearInterval (id)
    }
}

buttonStart.addEventListener('click', clickTimer)


