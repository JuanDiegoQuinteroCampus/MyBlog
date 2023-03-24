export default {
    total:[ 
        
        {
        informacion:{
            name:"From the Firehose",
            titulo:"Sample blog post",
            hecho:"January 1, 2021 by",
            enlace:"Mark",
            texto1:"This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.",
            texto2:"This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.",
            titulo2:"Sample blog post",
            corto:"January 1, 2021 by",
            corto2:"Quoted text goes here.",
            texto3:"This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.",
            titulo3:"Sample blog post",
            texto4:"This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.",
            lista1:{
                num1:"First list item",
                num2:"First list item",
                num3:"First list item",
                 },
            corto3:"Quoted text goes here.",
            lista2:{
                num1:"First list item",
                num2:"First list item",
                num3:"First list item",
                 },
            corto4:"Quoted text goes here.",
            negrita1:"HyperText Markup Language (HTML)",
            texto5:"This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.",
            negrita2:"HyperText Markup Language (HTML)",
            texto6:"This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.",
            negrita3:"HyperText Markup Language (HTML)",
            texto7:"This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.",
            titulo4:"Sample blog post",
            texto8:"This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.",
            enlace2:"Mozilla Developer Network.",
            lista3:{
                num1:"First list item",
                num2:"First list item",
                num3:"First list item",
                num4:"First list item",
                num5:"First list item",
                num6:"First list item",
                 },
            corto5:"Quoted text goes here.",
            titulo5:"Sample blog post",
            texto9:"This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.",
            titulo6:"Sample blog post",
            texto10:"This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.",
            corto6:"Quoted text goes here.",
            texto11:"This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.",
        }},
    ] , 

    showartitle(){
        this.total.forEach((val,id)=>{
            document.querySelector("#Firehose").insertAdjacentHTML("beforeend", `
            <h3 class="pb-4 mb-4 fst-italic border-bottom">
            ${val.informacion.name}
             </h3>
            `);
            document.querySelector("#informacion1").insertAdjacentHTML("beforeend", `
            <article class="blog-post">
          <h2 class="blog-post-title">${val.informacion.titulo}</h2>
          <p class="blog-post-meta">${val.informacion.hecho} <a href="#">${val.informacion.enlace}</a></p>

          <p>${val.informacion.texto1}</p>
          <hr>
          <p>${val.informacion.texto2}</p>
          <h2>${val.informacion.titulo2}</h2>
          <p>${val.informacion.corto}</p>
          <blockquote class="blockquote">
            <p>${val.informacion.corto2}</p>
          </blockquote>
          <p>${val.informacion.texto3}</p>
          <h3>${val.informacion.titulo3}</h3>
          <p>${val.informacion.texto4}</p>
          <ul>
            <li>${val.informacion.lista1.num1}</li>
            <li>${val.informacion.lista1.num2}</li>
            <li>${val.informacion.lista1.num3}</li>
          </ul>
          <p>${val.informacion.corto3}</p>
          <ol>
            <li>${val.informacion.lista2.num1}</li>
            <li>${val.informacion.lista2.num2}</li>
            <li>${val.informacion.lista2.num3}</li>
          </ol>
          <p>${val.informacion.corto4}</p>
          <dl>
            <dt>${val.informacion.negrita1}</dt>
            <dd>${val.informacion.texto5}</dd>
            <dt>${val.informacion.negrita2}</dt>
            <dd>${val.informacion.texto6}</dd>
            <dt>${val.informacion.negrita3}</dt>
            <dd>${val.informacion.texto7}</dd>
          </dl>
          <h2>${val.informacion.titulo4}</h2>
          <p>${val.informacion.texto8} <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">${val.informacion.enlace2}</a>.</p>
          <ul>
            <li>${val.informacion.lista3.num1}</li>
            <li>${val.informacion.lista3.num2}</li>
            <li>${val.informacion.lista3.num3}</li>
            <li>${val.informacion.lista3.num4}</li>
            <li>${val.informacion.lista3.num5}</li>
            <li>${val.informacion.lista3.num6}
            </li>
          </ul>
          <p>${val.informacion.corto5}</p>
          <h2>${val.informacion.titulo5}</h2>
          <p>${val.informacion.texto9}</p>
          <h3>${val.informacion.titulo6}</h3>
          <p>${val.informacion.texto10}</p>
          <pre><code>${val.informacion.corto6}</code></pre>
          <p>${val.informacion.texto11}</p>
        </article>
            `);
        })
    }
}
