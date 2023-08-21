

let rating = ''
const submit = document.getElementById('submit')
const form = document.getElementById('form')


document.addEventListener('click', function (e) {
  if(e.target.dataset.btn === 'one'){
    rating = 1
 }
 else if(e.target.dataset.btn === 'two'){
  rating = 2

}
else if(e.target.dataset.btn === 'three'){
  rating = 3
}
else if(e.target.dataset.btn === 'four'){
  rating = 4
}

else if(e.target.dataset.btn === 'five'){
  rating = 5
}
})



submit.addEventListener('click', function(){
  if(rating !== ''){
    document.getElementById('container').classList.add('hidden')
    render()
}
})


function render(){

  form.innerHTML =
  `
  <img src="images/illustration-thank-you.svg">
  <p class="rating">You selected <span>${rating}</span> out of 5</p>

  <h1>Thank you!</h1>

  <p class="thank-you-msg">We appreciate you taking the time to give a rating. If you ever need more support, 
  don't hesitate to get in touch!</p>
`
form.classList.remove('hidden')
}