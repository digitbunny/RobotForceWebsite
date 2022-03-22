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
    navMobile.classList.remove('down')
    dropdownBox.classList.remove('dropdown-mobile')
}


const handleDropdown = () => {
    dropdownContent.classList.add('dropdown-content--active')
    navMobile.classList.add('down')
    dropdownBox.classList.add('dropdown-mobile');
    closeDropdown();
}


const closeDropdown = () => {
    const allNavItems = document.querySelectorAll('.nav__items');
    allNavItems.forEach(item => item.addEventListener('click', remove)    
    );
}

const remove = () => {
    dropdownContent.classList.remove('dropdown-content--active')
    navMobile.classList.remove('down')
    dropdownBox.classList.remove('dropdown-mobile')
}


hamburgerBtn.addEventListener('click', handleNav)

dropdownBtn.addEventListener('click', handleDropdown)
