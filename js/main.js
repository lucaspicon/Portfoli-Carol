//Navigation bar effects on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header")
  header.classList.toggle("sticky", window.scrollY > 0)
})

//Servicos section - Modal
const serviceModals = document.querySelectorAll(".servicos-modal")
const learnmoreBtns = document.querySelectorAll(".saiba-mais-btn")
const modalCloseBtns = document.querySelectorAll(".modal-close-btn")

var modal = function (modalClick) {
  serviceModals[modalClick].classList.add("active")
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
  learnmoreBtn.addEventListener("click", () => {
    modal(i)
  })
})

modalCloseBtns.forEach((modalCloseBtns) => {
  modalCloseBtns.addEventListener("click", () => {
    serviceModals.forEach((modalView) => {
      modalView.classList.remove("active")
    })
  })
})

//Portfolio section - Modal

const portfolioModals = document.querySelectorAll(".portfolio-model")
const imgCards = document.querySelectorAll(".img-card")
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn")

var portfolioModal = function (modalClick) {
  portfolioModals[modalClick].classList.add("active")
}

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    portfolioModal(i)
  })
})

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener("click", () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active")
    })
  })
})

//Nossos clientes - Swiper
var swiper = new Swiper(".cliente-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})

//Dark/light theme
const themeBtn = document.querySelector(".theme-btn")

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme")
  themeBtn.classList.toggle("sun")

  localStorage.setItem("saved-theme", getCurrentTheme())
  localStorage.setItem("saved-icon", getCurrentIcon())
})

const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? "dark" : "ligth"
const getCurrentIcon = () =>
  document.classList.contains("sun") ? "sun" : "moon"

const savedTheme = localStorage.getItem("saved-theme")
const savedIcon = localStorage.getItem("saved-icon")

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"](
    "dark-theme"
  )
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun")
}

//Botao de rolagem
const scrollTopBtn = document.querySelector(".scrollToTop-btn")

window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", window.scrollY > 500)
})

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
})

//Itens do menu de navegação ativos na rolagem da página
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section")
  const scroll = window.pageYOffset

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight
    let sectionTop = current.offsetTop - 50
    let id = current.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-itens a[href*=" + id + "]")
        .classList.add("active")
    } else {
      document
        .querySelector(".nav-itens a[href*=" + id + "]")
        .classList.remove("active")
    }
  })
})

//menu responsivo
const menuBtn = document.querySelector(".nav-menu-btn")
const closeBtn = document.querySelector(".nav-close-btn")
const navigation = document.querySelector(".navigation")
const navItem = document.querySelectorAll(".nav-itens a")

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active")
})

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active")
})

navItem.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navigation.classList.remove("active")
  })
})

//Animações de revelação de rolagem
//Opções de revelação comuns para criar animações de revelação
ScrollReveal({
  //reset: true, manter desabilitado para que ao voltar o carregamento se mantenha
  distance: "40px",
  duration: 2500,
  delay: 100,
})

//Elementos de destino e opções específicas para criar animações de revelação
ScrollReveal().reveal(
  ".home .info h2, .section-titulo-01, .section-titulo-02",
  {
    delay: 200,
    origin: "left",
  }
)
ScrollReveal().reveal(".home .info h3, .home .info p, .sobre-info .button", {
  delay: 300,
  origin: "rigth",
})
ScrollReveal().reveal(".home .info .button", {
  delay: 200,
  origin: "bottom",
})
ScrollReveal().reveal(".media-icons i, .contato-left li", {
  delay: 200,
  origin: "left",
  interval: 200,
})
ScrollReveal().reveal(".home-img, .sobre-img", {
  delay: 200,
  origin: "bottom",
})
ScrollReveal().reveal(".sobre .descricao, .contato-right", {
  delay: 200,
  origin: "right",
})
ScrollReveal().reveal(".sobre .lista-profissional li", {
  delay: 200,
  origin: "right",
  interval: 200,
})
ScrollReveal().reveal(
  ".skills-descricao, .servicos-descricao, .contato-card, .cliente-swiper, .contato-left h2",
  {
    delay: 200,
    origin: "left",
  }
)
ScrollReveal().reveal(
  ".experience-card, .servicos-card, .educacao, .portfolio, .img-card",
  {
    delay: 200,
    origin: "bottom",
    interval: 200,
  }
)
ScrollReveal().reveal(".footer, .grupo", {
  delay: 200,
  origin: "top",
  interval: 200,
})
