const carousel = document.querySelector(".team-members")
let currentIndex = 0
const cardWidth = 340 // Approx width of each card + margin
const visibleCards = 3 // How many cards to show

// Calculate how many cards you can scroll to
const maxIndex = Math.ceil(carousel.children.length / visibleCards) - 1

function scrollNext() {
  if (currentIndex < maxIndex) {
    currentIndex++
    updateCarouselPosition()
  }
}

function scrollPrev() {
  if (currentIndex > 0) {
    currentIndex--
    updateCarouselPosition()
  }
}

function updateCarouselPosition() {
  const newPosition = -currentIndex * cardWidth * visibleCards
  carousel.style.transform = `translateX(${newPosition}px)`
}

document.addEventListener("DOMContentLoaded", function () {
  const navbarHeight = document.querySelector("nav").offsetHeight

  // Smooth scroll for all nav links and angle-down icon
  document.querySelectorAll("nav a, .angle-down-icon a").forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      const targetId = this.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        event.preventDefault()
        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight,
          behavior: "smooth",
        })
      }
    })
  })
})
