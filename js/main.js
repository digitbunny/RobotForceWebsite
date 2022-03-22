const navMobile = document.querySelector('.nav-mobile')
const hamburgerBtn = document.querySelector('.hamburger')
const closeHamburgerBtn = document.querySelector('.hamburger-inner')


const dropdownBtn = document.querySelector('.dropdown-btn')
const dropdownBox = document.querySelector('.dropdown')
const dropdownContent = document.querySelector('.dropdown-content')


const handleNav = () => {
    hamburgerBtn.classList.toggle('is-active')
    navMobile.classList.toggle('nav-mobile--active')
    dropdownContent.classList.remove('dropdown-content--active')
}


const handleDropdown = () => {
    dropdownContent.classList.toggle('dropdown-content--active')
}



hamburgerBtn.addEventListener('click', handleNav)

dropdownBtn.addEventListener('click', handleDropdown)
