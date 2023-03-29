let wsMyarticle1 = {
    showartitle(p1){
     return`
    <h3 class="pb-4 mb-4 fst-italic border-bottom">
    ${p1.informacion.name}
     </h3>
    
    <article class="blog-post">
  <h2 class="blog-post-title">${p1.informacion.titulo}</h2>
  <p class="blog-post-meta">${p1.informacion.hecho} <a href="${p1.informacion.href}">${p1.informacion.enlace}</a></p>

  <p>${p1.informacion.texto1}</p>
  <hr>
  <p>${p1.informacion.texto2}</p>
  <h2>${p1.informacion.titulo2}</h2>
  <p>${p1.informacion.corto}</p>
  <blockquote class="blockquote">
    <p>${p1.informacion.corto2}</p>
  </blockquote>
  <p>${p1.informacion.texto3}</p>
  <h3>${p1.informacion.titulo3}</h3>
  <p>${p1.informacion.texto4}</p>
  <ul>
    <li>${p1.informacion.lista1.num1}</li>
    <li>${p1.informacion.lista1.num2}</li>
    <li>${p1.informacion.lista1.num3}</li>
  </ul>
  <p>${p1.informacion.corto3}</p>
  <ol>
    <li>${p1.informacion.lista2.num1}</li>
    <li>${p1.informacion.lista2.num2}</li>
    <li>${p1.informacion.lista2.num3}</li>
  </ol>
  <p>${p1.informacion.corto4}</p>
  <dl>
    <dt>${p1.informacion.negrita1}</dt>
    <dd>${p1.informacion.texto5}</dd>
    <dt>${p1.informacion.negrita2}</dt>
    <dd>${p1.informacion.texto6}</dd>
    <dt>${p1.informacion.negrita3}</dt>
    <dd>${p1.informacion.texto7}</dd>
  </dl>
  <h2>${p1.informacion.titulo4}</h2>
  <p>${p1.informacion.texto8} <a
      href=${p1.informacion.href2}>${p1.informacion.enlace2}</a>.</p>
  <ul>
    <li>${p1.informacion.lista3.num1}</li>
    <li>${p1.informacion.lista3.num2}</li>
    <li>${p1.informacion.lista3.num3}</li>
    <li>${p1.informacion.lista3.num4}</li>
    <li>${p1.informacion.lista3.num5}</li>
    <li>${p1.informacion.lista3.num6}
    </li>
  </ul>
  <p>${p1.informacion.corto5}</p>
  <h2>${p1.informacion.titulo5}</h2>
  <p>${p1.informacion.texto9}</p>
  <h3>${p1.informacion.titulo6}</h3>
  <p>${p1.informacion.texto10}</p>
  <pre><code>${p1.informacion.corto6}</code></pre>
  <p>${p1.informacion.texto11}</p>
</article>
    `

}
}
self.addEventListener("message", (e)=>{
    postMessage(wsMyarticle1[`${e.data.module}`](e.data.data))
})