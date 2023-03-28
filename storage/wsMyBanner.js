let wsMyBanner = {
    showImage(p1){
        return document.querySelector(".imgStyle").style.backgroundImage = `url(${p1.image})`;
    },
    showSectionBanner(p1){
        let contenido = "";
        p1.forEach((val,id) => {
            
          contenido+=  `<h1 class="display-4 fst-italic">${p1.title.name}</h1>
        <p id="x" class="lead my-3 w-75 ">${p1.contenido.name}</p>
        <p class="lead mb-0"><a href="${p1.btn.href}" target="_blank" class="text-white fw-bold">${p1.continue.name}</a></p>`

        });
        return contenido;
        
    }
}