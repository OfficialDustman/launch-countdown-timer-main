
document.addEventListener('DOMContentLoaded', ()=>{

  //recieve data from DOM
  let day = document.getElementById('day')
  let hour = document.getElementById('hour')
  let minute = document.getElementById('minute')
  let second = document.getElementById('second')
  // console.log(day)

  //convert to seconds
  let dayToSec = day.innerText * 60 * 60 * 24
  let hourToSec = hour.innerText * 60 * 60
  let minuteToSec  = minute.innerText * 60
  // console.log(minuteToSec)

  //to get milliseconds
  let totalSec = dayToSec + hourToSec + minuteToSec + Number(second.innerText)
  let totalMiliSeconds = totalSec * 1000
  // console.log(totalMiliSeconds)

  let futureDate = Date.now() + totalMiliSeconds
  let remainingTime = futureDate - Date.now()
  // console.log(remainingTime)

  setInterval(()=>{

    //calculate time remaining
    let timeInSec = Math.floor((remainingTime % (1000 * 60)) / 1000)
    let timeInMin = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
    let timeInHour = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let timeInDay = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
    // console.log(timeInSec)

    //update every secs
    remainingTime = futureDate - Date.now()
    
    //display timing
    day.innerText = `0${timeInDay}`
    hour.innerText = timeInHour
    minute.innerText = timeInMin
    second.innerText = timeInSec


    //stop timing when countdown is done
    if (remainingTime < 0) {
      clearInterval();
    }

  },1000)

})
