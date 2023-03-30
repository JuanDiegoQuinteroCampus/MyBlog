let wsMyFooter = {
footer(p1){
    return `
        <p>${p1.texto} <a href=${p1.href}>${p1.enlace}</a> by <a
    href=${p1.href2}>${p1.by2}</a>.</p>
<p>
  <a href="#">${p1.Back}</a>
</p>`;
}

}
self.addEventListener("message", (e)=>{
    
    postMessage(wsMyFooter[`${e.data.module}`](e.data.data))
})
