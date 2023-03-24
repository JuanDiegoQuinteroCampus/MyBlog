export default {
    total2:[
        {
            contenido:{
                titulo:"Sample blog post",
                hecho:"January 1, 2021 by",
                enlace:"Mark",
                texto1:"This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.",
                corto:"xsdvfsvdfvdevdvdfvdvdfvdf",
                texto2:"This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.",
                titulo2:"Sample blog post",
                corto2:"kjdsbdkcksdvsvfdy",
                tabla:{
                    fila1:{
                        col1:"Marca",
                        col2:"Modelo",
                        col3:"Tipo",
                    },
                    fila2:{
                        col1:"Harley-Davidson",
                        col2:"Fat Boy",
                        col3:"Cruiser",
                    },
                    fila3:{
                        col1:"Yamaha",
                        col2:"YZF-R1",
                        col3:"Superbike",
                    },
                    fila4:{
                        col1:"Honda",
                        col2:"Africa Twin",
                        col3:"Aventura",
                    },
                    fila5:{
                        col1:"Kawasaki",
                        col2:"Ninja 400",
                        col3:"Deportiva",
                    },
                    fila6:{
                        col1:"BMW",
                        col2:"R 1250 GS",
                        col3:"Aventura",
                    },
                    
                },
                texto3:"This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.",
                titulo3:"Sample blog post",
                hecho2:"January 1, 2021 by",
                enlace2:"Mark",
                texto4:"This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.",
                lista:{
                    num1:"First list item",
                    num2:"First list item",
                    num3:"First list item",
                    num4:"First list item",
                    num5:"First list item",
                    num6:"First list item",
                     },
                texto5:"This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.",
                boton1:"x",
                boton2:"x",
            }
        }
    ],

    showartitle2(){
        this.total2.forEach((val,id)=>{
            document.querySelector("#informacion2").insertAdjacentHTML("beforeend", `
            <article class="blog-post">
          <h2 class="${val.contenido.titulo}</h2>
          <p class="blog-post-meta">${val.contenido.texto1} <a href="#">Jacob</a></p>

          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and
            show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
            demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <blockquote>
            <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>
          </blockquote>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and
            show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
            demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <h3>${val.contenido.titulo2}</h3>
          <p>And don't forget about tables in these posts:</p>

          <table class="table text-white">
            <thead>
              <tr>
                <th>Name</th>
                <th>Upvotes</th>
                <th>Downvotes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alice</td>
                <td>10</td>
                <td>11</td>
              </tr>
              <tr>
                <td>Bob</td>
                <td>4</td>
                <td>3</td>
              </tr>
              <tr>
                <td>Charlie</td>
                <td>7</td>
                <td>9</td>
              </tr>
              <tr>
                <td>Charlie</td>
                <td>7</td>
                <td>9</td>
              </tr>
              <tr>
                <td>Charlie</td>
                <td>7</td>
                <td>9</td>
              </tr>
            </tbody>
            
          </table>

          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly
            repetitive body text used throughout.</p>
        </article>

        <article class="blog-post">
          <h2 class="blog-post-title">${val.contenido.titulo3}</h2>
          <p class="blog-post-meta">${val.contenido.texto2} <a href="#">Chris</a></p>

          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and
            show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
            demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <ul>
            <li>First list item</li>
            <li>Second list item with a longer description</li>
            <li>Third list item to close it out</li>
          </ul>
          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly
            repetitive body text used throughout.</p>
        </article>

        <nav class="blog-pagination" aria-label="Pagination">
          <a class="btn btn-outline-primary" href="#">Older</a>
          <a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">Newer</a>
        </nav>
            `);
        })
    }
}