function suportaTransform(){var e=document.createElement("div");return void 0!==e.style.transform||void 0!==e.style.WebkitTransform}!function(){var e=document.querySelector(".header-menu-titulo"),t=document.querySelector(".header-menu");e&&(e.onclick=function(){t.hasAttribute("data-ativo")?t.removeAttribute("data.ativo"):t.setAttribute("data.ativo","")})}(),window.addEventListener("load",function(){function e(e){a.classList.toggle("header-barraBusca-visivel"),c.classList.toggle("navegacao-form-active"),e.preventDefault()}function t(){a.classList.remove("header-barraBusca-visivel"),c.classList.remove("navegacao-form-active")}function r(e){e.stopPropagation()}function n(){setTimeout(function(){document.documentElement.addEventListener("click",t),document.querySelector(".header-navegacao").addEventListener("click",r),document.querySelector(".header-barraBusca").addEventListener("click",r)},0),o.removeEventListener("click",n)}var o=document.querySelector(".header-busca"),a=document.body,c=document.querySelector(".header-navegacao-form");o&&"classList"in document.documentElement&&(o.addEventListener("click",e),o.addEventListener("click",n))}),suportaTransform()||(document.documentElement.className+=" no-transform"),window.addEventListener("load",function(){function e(){var e=!0,r=document.querySelector(".footer-newsletter-input");return e=t(r.value),e||(r.classList.add("form-erro"),document.querySelector(".footer-newsletter-button").classList.add("form-erro")),e}function t(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}var r=document.querySelector(".footer-newsletter-form");r.onsubmit=e});