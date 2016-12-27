(function() {
	// controle do throttle
	var jarodei = false;

	// pega todas as imagens num array e pre-calcula seu topo
	var imgs = document.querySelectorAll('img[data-src]:not([src])');
	var cache = [];

	for (var i = 0; i < imgs.length; i++) {
        cache.push({
            topo: imgs[i].getBoundingClientRect().top + pageYOffset,
            elemento: imgs[i]
        });
    }

    // cache da altura da janela
    var alturaJanela = window.innerHeight;

	window.addEventListener('scroll', function scrollListener() {

		// throttle
		if(jarodei) return;
		jarodei = true;
		setTimeout(function() {
			jarodei = false;
		}, 100);

		// meu while não toca no DOM, observa apenas variáveis cacheadas e o pageYOffset.
        // só manipulo o DOM quando preciso realmente mexer na imagem.
        while (cache.length && cache[0].topo < pageYOffset + alturaJanela + 200) {
            var img = cache.shift().elemento;
            img.src = img.getAttribute('data-src');
        }

        // removo o onscroll se não precisar mais dele
        if (cache.length == 0) {
            window.removeEventListener('scroll', scrollListener);
        }
	});
})();
