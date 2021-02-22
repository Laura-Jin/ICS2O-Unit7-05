document.getElementById('button').addEventListener('click', buttonOne)

let age = 0
let day = 'Monday'

function buttonOne () {
  day = document.getElementById('day').value

  age = document.getElementById('age').value
  age = parseInt(age)

  if ((day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') && (age < 18)) {
    document.getElementById('text').innerHTML = 'Time for school!'
  } else if ((day != 'Saturday' && day != ' Sunday') && (age >= 18)) {
    document.getElementById('text').innerHTML = 'Time to go to work!'
  } else {
    document.getElementById('text').innerHTML = 'Time to relax for the weekend!'
  }
}
