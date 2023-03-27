let wsMyHeader = {
    listTitle(p1){
    
        return`<a class="blog-header-logo text-light" href="#">${p1.name}</a>`;
    },
    listCompany(p1){
        let plantilla = "";
        p1.forEach((val,id) => {
            plantilla += `<a class="p-2 link-light " href="${val.href}">${val.name}</a>`
        });
        return plantilla;
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data))
})

