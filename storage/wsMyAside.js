 let wsMyAside = {
  showAside(nav){
                
    const data = nav.map((val, id) => {
        return(
            (val.link)
                ? this.list(val)
                : this.cards(val)
        )
    });
    return data;
},
cards(p1){
    return`
    <div class="p-4 mb-3  rounded" id="cardAside">
    <h3 class="fst-italic">${p1.title}</h3>
    <p class="mb-0">${p1.paragranph}</p>
    </div>`
},
list(p1){
    return`
        <div class="p-4" id="listAside">
        <h3 class="fst-italic">${p1.title}</h3>
        <ol class="list-unstyled mb-0">
          ${p1.link.map((val, id) => `<li><a href="${val.link}" target = "_blank">${val.name}</a></li>`).join("")}
        </ol>
      </div>`

},
    
}
self.addEventListener("message", (e)=>{
    postMessage(wsMyAside[`${e.data.module}`](e.data.data))
})