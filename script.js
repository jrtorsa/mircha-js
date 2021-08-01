const burger = document.querySelector('.hamburger')
const modal = document.querySelector('#myModal')

burger.addEventListener('click', () => {
    const active = burger.classList.toggle('is-active')
    if (!active) {
        modal.setAttribute('style', 'display: none')
    } else {
        modal.setAttribute('style', 'display: revert')
    }
})