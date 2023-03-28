let wsMyBanner = {

    showSectionBanner(p1){
        let contenido = "";

            
          contenido=  `<h1 class="display-4 fst-italic">${p1.title.name}</h1>
        <p id="x" class="lead my-3 w-75 ">${p1.contenido.name}</p>
        <p class="lead mb-0"><a href="${p1.btn.href}" target="_blank" class="text-white fw-bold">${p1.continue.name}</a></p>`

        return contenido;
        
    }
}


self.addEventListener("message", (e)=>{
    console.log(e.data);
    postMessage(wsMyBanner[`${e.data.module}`](e.data.data))
})
