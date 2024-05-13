

const overlay = document.querySelector('.overlay')

const navbars = document.querySelector('.nav__bars')
const subnav = document.querySelector('.subnavbar')
navbars.addEventListener('click', () => {
    subnav.classList.add('active')
    overlay.style.display = 'block'

    overlay.onclick = () => {
        subnav.classList.remove('active')
        overlay.style.display = 'none'
    }
})

const navtimes = document.querySelector('.subnav__times')
navtimes.addEventListener('click', () => {
    subnav.classList.remove('active')
    overlay.style.display = 'none'
})

const navkyquan = document.querySelector('.navkyquan')
navkyquan.addEventListener('click', (e) => {
    e.preventDefault()
    const navListRight = navkyquan.querySelector('.subnavbar__item-right')
    const navListDown = navkyquan.querySelector('.subnavbar__item-down')
    const navkyquan__list = document.querySelector('.navkyquan_list')



    if(navkyquan__list.classList.contains('active')) {
        navkyquan__list.classList.remove('active')
        navListRight.style.display = 'block'
        navListDown.style.display = 'none'

    }
    else {
        navListRight.style.display = 'none'
        navListDown.style.display = 'block'
        navkyquan__list.classList.add('active')
    }
})

const navlocation = document.querySelector('.navlocation')
navlocation.addEventListener('click', (e) => {
    e.preventDefault()
    const navListRight = navlocation.querySelector('.subnavbar__item-right')
    const navListDown = navlocation.querySelector('.subnavbar__item-down')
    const navlocation__list = document.querySelector('.navlocation__list')
    if(navlocation__list.classList.contains('active')) {
        navlocation__list.classList.remove('active')
        navListRight.style.display = 'block'
        navListDown.style.display = 'none'

    }
    else {
        navlocation__list.classList.add('active')
        navListRight.style.display = 'none'
        navListDown.style.display = 'block'

    }
})

