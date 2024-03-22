const button = document.querySelector('button')
const closeIcon = document.querySelector('.close-icon')
const popup = document.querySelector('.popup-container')
const overlay = document.querySelector('.overlay')
const btnContainer = document.querySelector('.btn-container')

button.addEventListener('click', () => {
    popup.classList.add('popup-open')
    btnContainer.classList.add('hide-container')
})

closeIcon.addEventListener('click', () => {
    popup.classList.remove('popup-open')
    btnContainer.classList.remove('hide-container')
})

overlay.addEventListener('click', () => {
    popup.classList.remove('popup-open')
})