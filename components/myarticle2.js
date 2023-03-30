import config from "../storage/config.js";
export default {
  
  

  showartitle2(){
    config.dataMyArticle2();
    Object.assign(this, JSON.parse(localStorage.getItem("myarticle2")));

    const ws = new Worker("storage/wsMyarticle2.js", {type:"module"});
    let id=[];
    let count = 0;
    ws.postMessage({module:"showartitle2", data:this.total2});
    
    id=["#informacion2"];
    ws.addEventListener("message",(e)=>{
        let doc = new DOMParser().parseFromString(e.data,"text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==count) ? ws.terminate(): count++;
        
    })
  }
}
/* export default {
    total2:[
        {
            contenido:{
                titulo:"la Triumph Speed Twin y Norton Manx",
                hecho:" 1937-45 ",
                
                texto1:"Estas motocicletas tenían características deportivas, como una posición de conducción más agresiva, motores potentes y una mayor capacidad de manejo en curvas.",
                corto:"Se consideran como las primeras motos deportivas",
                texto2:"Fue una motocicleta innovadora para su tiempo, con un motor bicilíndrico en paralelo de 498cc, que proporcionaba una potencia de alrededor de 27 caballos de fuerza, lo que permitía una velocidad máxima de alrededor de 145 km/h. La Speed Twin tenía una posición de conducción más agresiva, gracias a un manillar más bajo y una posición más retrasada de los reposapiés, lo que permitía una mayor maniobrabilidad y un mejor control en curvas. También tenía una suspensión delantera telescópica, que mejoraba la estabilidad en carretera y la comodidad del conductor. La Triumph Speed Twin se convirtió rápidamente en una motocicleta popular para carreras de motocicletas y eventos de motociclismo deportivo en todo el mundo, estableciendo el estándar para futuras motocicletas deportivas.",
                titulo2:"Algunas marcas, modelo y tipo",
                corto2:"Algunas motos famosas son:",
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
                texto3:"Cada modelo de moto cuenta con una amplia variedad de accesorios y piezas de repuesto disponibles en el mercado, lo que permite a los propietarios personalizar y mejorar el rendimiento y la apariencia de sus motos.",
                titulo3:"Reglas de transito motos",
                hecho2:"Siglo XIX",
                enlace2:"Leyes",
                href:"https://www.misabogados.com.co/blog/normas-de-transito-para-motociclistas",
                texto4:"Algunas reglas de manejo importante para una moto son:",
                lista:{
                    num1:"Usa siempre un casco homologado y otros equipos de protección personal, como guantes, botas y chaqueta con protecciones.",
                    num2:"Conduce siempre dentro de los límites de velocidad y de manera defensiva. Mantén una distancia segura con los otros vehículos, y evita los puntos ciegos de los otros conductores.",
                    num3:"Mantén la motocicleta en buenas condiciones de funcionamiento, y realiza un mantenimiento regular en los intervalos recomendados por el fabricante.",
                    num4:"Nunca manejes una moto bajo los efectos del alcohol, drogas o medicamentos que puedan afectar tu capacidad de conducción.",
                    num5:"Presta atención a las condiciones de la carretera, incluyendo el clima, la superficie de la carretera y los obstáculos.",
                    num6:"Usa siempre las luces direccionales y otros sistemas de señalización para indicar tus movimientos a otros conductores.",
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
          <h2 class="blog-post-title">${val.contenido.titulo}</h2>
          <p class="blog-post-meta">${val.contenido.hecho} </p>

          <p>${val.contenido.texto1}</p>
          <blockquote>
            <p>${val.contenido.corto}</p>
          </blockquote>
          <p>${val.contenido.texto2}</p>
          <h3>${val.contenido.titulo2}</h3>
          <p>${val.contenido.corto2}</p>

          <table class="table text-white">
            <thead>
              <tr>
                <th>${val.contenido.tabla.fila1.col1}</th>
                <th>${val.contenido.tabla.fila1.col2}</th>
                <th>${val.contenido.tabla.fila1.col3}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${val.contenido.tabla.fila2.col1}</td>
                <td>${val.contenido.tabla.fila2.col2}</td>
                <td>${val.contenido.tabla.fila2.col3}</td>
              </tr>
              <tr>
                <td>${val.contenido.tabla.fila3.col1}</td>
                <td>${val.contenido.tabla.fila3.col2}</td>
                <td>${val.contenido.tabla.fila3.col3}</td>
              </tr>
              <tr>
                <td>${val.contenido.tabla.fila4.col1}</td>
                <td>${val.contenido.tabla.fila4.col2}</td>
                <td>${val.contenido.tabla.fila4.col3}</td>
              </tr>
              <tr>
                <td>${val.contenido.tabla.fila5.col1}</td>
                <td>${val.contenido.tabla.fila5.col2}</td>
                <td>${val.contenido.tabla.fila5.col3}</td>
              </tr>
              <tr>
                <td>${val.contenido.tabla.fila6.col1}</td>
                <td>${val.contenido.tabla.fila6.col2}</td>
                <td>${val.contenido.tabla.fila6.col3}</td>
              </tr>
            </tbody>
            
          </table>

          <p>${val.contenido.texto3}</p>
        </article>

        <article class="blog-post">
          <h2 class="blog-post-title">${val.contenido.titulo3}</h2>
          <p class="blog-post-meta">${val.contenido.hecho2} <a href="${val.contenido.href}">${val.contenido.enlace2}</a></p>

          <p>${val.contenido.texto4}</p>
          <ul>
            <li>${val.contenido.lista.num1}</li>
            <li>${val.contenido.lista.num2}</li>
            <li>${val.contenido.lista.num3}</li>
          </ul>
          <p>${val.contenido.texto5}</p>
        </article>

        <nav class="blog-pagination" aria-label="Pagination">
          <a class="btn btn-outline-primary" href="#">${val.contenido.boton1}</a>
          <a class="btn btn-outline-secondary disabled" href="#" tabindex="-1" aria-disabled="true">${val.contenido.boton2}</a>
        </nav>
            `);
        })
    }
} */