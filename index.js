// console.log('This is setup properly')
let htmlObj = document.getElementsByTagName("html")
let funDip = document.getElementById("fun-dip")
let snickers = document.querySelector(".snickers")

// console.log(htmlObj)
function changeColor() {
  funDip.style.height = "500px"
  funDip.style.width = "500px"
  if (funDip.style.backgroundColor === "rgb(186, 218, 85)") {
    funDip.style.backgroundColor = "aqua"
  } else {
    funDip.style.backgroundColor = "#bada55"
  }
}

funDip.addEventListener("click", changeColor)
funDip.addEventListener("mouseenter", e => {
  funDip.style.backgroundColor = "purple"
})
funDip.addEventListener("mouseleave", e => {
  funDip.style.backgroundColor = "pink"
})

snickers.addEventListener('click', handleOpen)

function handleOpen() {
    snickers.classList.toggle('open')
    if (snickers.innerText !== 'SATISFIED') {
        snickers.innerText = 'SATISFIED'
    } else {
        snickers.innerText = 'Snickers'
    }
}