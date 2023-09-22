let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x")
  navbar.classList.toggle("active")
}

let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY
    let offset = sec.offsetTop - 100
    let height = sec.offsetHeight
    let id = sec.getAttribute("id")

    if (top > offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active")
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active")
      })
      sec.classList.add('show-animate')
    }else{
        sec.classList.remove("show-animate")
    }
  })

  let header = document.querySelector("header")

  header.classList.toggle("sticky", window.scrollY > 100)

    menuIcon.classList.remove("bx-x")
    navbar.classList.remove("active")

    let footer = document.querySelector('footer');

    footer.classList.add('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight)
}

// document.addEventListener("DOMContentLoaded", function () {
//   const images = document.querySelectorAll(".image")

//   images.forEach(function (image) {
//     image.addEventListener("mouseenter", function () {
//       const vejaMaisText = document.createElement("div")
//       vejaMaisText.classList.add("veja-mais")
//       vejaMaisText.textContent = "Veja Mais"
//       image.parentElement.appendChild(vejaMaisText)
//     })

//     image.addEventListener("mouseleave", function () {
//       const vejaMaisText = image.parentElement.querySelector(".veja-mais")
//       if (vejaMaisText) {
//         vejaMaisText.remove()
//       }
//     })
//   })
// })


document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".image")

  images.forEach(function (image) {
    let isTouch = false

    image.addEventListener("mouseenter", function () {
      if (!isTouch) {
        const vejaMaisText = document.createElement("div")
        vejaMaisText.classList.add("veja-mais")
        vejaMaisText.textContent = "Veja Mais"
        image.parentElement.appendChild(vejaMaisText)
      }
    })

    image.addEventListener("touchstart", function () {
      isTouch = true

      const vejaMaisText = document.createElement("div")
      vejaMaisText.classList.add("veja-mais")
      vejaMaisText.textContent = "Veja Mais"
      image.parentElement.appendChild(vejaMaisText)
    })

    image.addEventListener("mouseleave", function () {
      const vejaMaisText = image.parentElement.querySelector(".veja-mais")
      if (vejaMaisText) {
        vejaMaisText.remove()
      }
    })
  })
})
