// Open to Menu and Close
const menu = document.getElementById('menu')
const divtobackhome = document.getElementById('divtobackhome')

const btn = document.querySelector('.btn-menu')
    .addEventListener('click', function() { 
        menu.style.display = "block" 
        divtobackhome.style.display = 'none'
    })

const close = document.querySelector('.btn-close')
    .addEventListener('click', () => {
        menu.style.display = 'none'
        divtobackhome.style.display = 'block'
    })

// More-beach
const lessbeach = document.getElementById('less-beach')
const allbeach = document.querySelectorAll('.beach_novisibility')
    
function beachVisibility() {
    allbeach.forEach(beach_novisibility=> { 
        document.querySelector('.more-beach').addEventListener('click', function() {
            setTimeout(() => {
                beach_novisibility.style.display = "flex"
                lessbeach.style.display = 'flex'
        }, 1000);
    })
})
}
beachVisibility()

function beachNoVisibility() {
    allbeach.forEach(beach_novisibility=> {
        lessbeach.addEventListener('click', () => {
            setTimeout(() => {
                beach_novisibility.style.display = 'none'
                lessbeach.style.display = 'none'
            }, 1000);
        })
    })
}
beachNoVisibility()

// Legend on / off
const legend = document.getElementById('add_legend')

const activeLegend = document.querySelector('.see_caption')
    .addEventListener('click', () => {
        setTimeout(() => {
            legend.style.display = 'flex'
        }, 1000);
    })

const nolegend = document.querySelector('.no_legend')
    .addEventListener('click', () => {
        setTimeout(() => {
            legend.style.display = 'none'
        }, 1000);
    })
