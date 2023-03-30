let wsMyarticle2 = {


showartitle2(p1){
    
     return`
        <article class="blog-post">
      <h2 class="blog-post-title">${p1.contenido.titulo}</h2>
      <p class="blog-post-meta">${p1.contenido.hecho} </p>

      <p>${p1.contenido.texto1}</p>
      <blockquote>
        <p>${p1.contenido.corto}</p>
      </blockquote>
      <p>${p1.contenido.texto2}</p>
      <h3>${p1.contenido.titulo2}</h3>
      <p>${p1.contenido.corto2}</p>

      <table class="table text-white">
        <thead>
          <tr>
            <th>${p1.contenido.tabla.fila1.col1}</th>
            <th>${p1.contenido.tabla.fila1.col2}</th>
            <th>${p1.contenido.tabla.fila1.col3}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${p1.contenido.tabla.fila2.col1}</td>
            <td>${p1.contenido.tabla.fila2.col2}</td>
            <td>${p1.contenido.tabla.fila2.col3}</td>
          </tr>
          <tr>
            <td>${p1.contenido.tabla.fila3.col1}</td>
            <td>${p1.contenido.tabla.fila3.col2}</td>
            <td>${p1.contenido.tabla.fila3.col3}</td>
          </tr>
          <tr>
            <td>${p1.contenido.tabla.fila4.col1}</td>
            <td>${p1.contenido.tabla.fila4.col2}</td>
            <td>${p1.contenido.tabla.fila4.col3}</td>
          </tr>
          <tr>
            <td>${p1.contenido.tabla.fila5.col1}</td>
            <td>${p1.contenido.tabla.fila5.col2}</td>
            <td>${p1.contenido.tabla.fila5.col3}</td>
          </tr>
          <tr>
            <td>${p1.contenido.tabla.fila6.col1}</td>
            <td>${p1.contenido.tabla.fila6.col2}</td>
            <td>${p1.contenido.tabla.fila6.col3}</td>
          </tr>
        </tbody>
        
      </table>

      <p>${p1.contenido.texto3}</p>
    </article>

    <article class="blog-post">
      <h2 class="blog-post-title">${p1.contenido.titulo3}</h2>
      <p class="blog-post-meta">${p1.contenido.hecho2} <a href="${p1.contenido.href}">${p1.contenido.enlace2}</a></p>

      <p>${p1.contenido.texto4}</p>
      <ul>
        <li>${p1.contenido.lista.num1}</li>
        <li>${p1.contenido.lista.num2}</li>
        <li>${p1.contenido.lista.num3}</li>
      </ul>
      <p>${p1.contenido.texto5}</p>
    </article>

    <nav class="blog-pagination" aria-label="Pagination">
      <a class="btn btn-outline-primary" href="#">${p1.contenido.boton1}</a>
      <a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">${p1.contenido.boton2}</a>
    </nav>
        `
    
}
}
self.addEventListener("message", (e)=>{
    postMessage(wsMyarticle2[`${e.data.module}`](e.data.data))
})