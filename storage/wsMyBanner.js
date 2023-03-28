let wsMyBanner = {
    showImage(p1){
        return document.querySelector(".imgStyle").style.backgroundImage = `url(${this.image})`;
    },
    showSectionBanner(){
        document.querySelector("#banner").insertAdjacentHTML("beforeend",`<h1 class="display-4 fst-italic">${this.title.name}</h1>
        <p id="x" class="lead my-3 w-75 ">${this.contenido.name}</p>
        <p class="lead mb-0"><a href="${this.btn.href}" target="_blank" class="text-white fw-bold">${this.continue.name}</a></p>`)
    }
}