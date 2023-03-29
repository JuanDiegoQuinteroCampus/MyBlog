let wsMypost = {
    showPost(p1){
        let plantilla = "";
        p1.forEach((val,id) => {
          plantilla +=`
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-20 position-relative" id="cards">
                <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${val.article}</strong>
                <h3 class="mb-0">${val.title}</h3>
                <div class="mb-1 text-muted">${val.date}</div>
                <p class="card-text mb-auto">${val.paragraph}</p>
                <a href="${val.btn.href}" class="stretched-link">${val.btn.name}</a>
            </div>
            <div class="col-auto d-none d-lg-block">
                <img src="${val.image}" class="responsiveImg">
            </div>
            </div>
            
            `});
            return plantilla;
        }
        
}
self.addEventListener("message", (e)=>{
    postMessage(wsMypost[`${e.data.module}`](e.data.data))
})
