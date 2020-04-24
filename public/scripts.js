var sideBarElement = document.getElementById("sidebar").style
var headerElement = document.getElementById("time").style
var hourElement = document.querySelector("h3").style
var btnElement = document.getElementById("headerBtn")
var btnElementSide = document.getElementById("sideBtn").style

btnElementSide.transform = "rotateZ(90deg)"
headerElement.borderRadius = "0 0 0 40%"
btnElement.style.borderRadius = "0 0 0 40%"

sideBarElement.width = "7%"
sideBarElement.transition = "width 200ms ease-in-out, border-radius 200ms ease"
btnElementSide.transition = "transform 200ms ease"
headerElement.transition = "height 200ms ease-in-out, border-radius 200ms"
hourElement.transition = "opacity 300ms, transform 300ms"
btnElement.style.transition = "border-radius 200ms"

headerElement.width = "auto"
headerElement.height = "6vh"
hourElement.opacity = "0"

document.getElementById("sideBtn").addEventListener("click", function () {
  if (sideBarElement.width === "7%") {
    sideBarElement.width = "25%"
    btnElementSide.transform = "rotate(0deg)"
  }
  else {
    sideBarElement.width = "7%"
    btnElementSide.transform = "rotate(90deg)"
  }

  if (sideBarElement.width === "25%") sideBarElement.borderRadius = "0 0 90% 0"
  else sideBarElement.borderRadius = "0"
})

document.getElementById("headerBtn").addEventListener("click", function () {
  if (headerElement.height === "6vh") {
    btnElement.style.borderRadius = "0"
    btnElement.innerText = "Ocultar"
    headerElement.height = "15vh"
    headerElement.width = "20%"
    headerElement.borderRadius = "0"
    hourElement.opacity = "1"
    hourElement.transform = "translate(0,0)"
  } else {
    btnElement.innerText = "Hora atual"
    headerElement.height = "6vh"
    headerElement.width = "auto"
    hourElement.opacity = "0"
    hourElement.transform = "translate(0,-20px)"
    btnElement.style.borderRadius = "0 0 0 40%"
    headerElement.borderRadius = "0 0 0 40%"
  }
})
