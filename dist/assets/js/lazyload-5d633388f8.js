!function(){for(var e=!1,t=document.querySelectorAll("img[data-src]:not([src])"),n=[],o=0;o<t.length;o++)n.push({topo:t[o].getBoundingClientRect().top+pageYOffset,elemento:t[o]});var r=window.innerHeight;window.addEventListener("scroll",function i(){if(!e){for(e=!0,setTimeout(function(){e=!1},100);n.length&&n[0].topo<pageYOffset+r+200;){var t=n.shift().elemento;t.src=t.getAttribute("data-src")}0==n.length&&window.removeEventListener("scroll",i)}})}();