// Identificar o clique no menu
const clickMenu = document.querySelectorAll('#nomodal a[href^="#]')
    clickMenu.forEach(verificItems => {
    menu.style.display = 'none'
        verificItems.addEventListener('click', scrollToIdClick,
        menu.style.display = 'none'
      )
    }) 

const clickToBackHome = document.getElementById('toBackHome')
    .addEventListener('click', scrollToIdClick)

// Após clicar em algum elemento <a> dentro do menu
function scrollToIdClick (event) {
    divtobackhome.style.display = 'block'

    // tira o padrão
    event.preventDefault()
    // Quando clicar vai puxar o atributo href e mostrar a section
    const to = getScrollTopByHref(event.target)

    scrollToPosition(to)
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href')
    // Vai levar até o local na page
    return document.querySelector(id).offsetTop
}

function scrollToPosition(to) {
    // window.scroll({
    //     top: to,
    //     behavior: 'smooth'
    // })    
    smoothScrollTo(0, to)
}    
// Fará scroll suave
// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
    * @param {int} duration: animation duration in ms
    */
   function smoothScrollTo(endX, endY, duration) {
     const startX = window.scrollX || window.pageXOffset;
     const startY = window.scrollY || window.pageYOffset;
     const distanceX = endX - startX;
     const distanceY = endY - startY;
     const startTime = new Date().getTime();
   
     duration = typeof duration !== 'undefined' ? duration : 1000;
   
     // Easing function
     const easeInOutQuart = (time, from, distance, duration) => {
       if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
       return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
     };
   
     const timer = setInterval(() => {
       const time = new Date().getTime() - startTime;
       const newX = easeInOutQuart(time, startX, distanceX, duration);
       const newY = easeInOutQuart(time, startY, distanceY, duration);
       if (time >= duration) {
         clearInterval(timer);
       }
       window.scroll(newX, newY);
     }, 1000 / 60); // 60 fps
   };
