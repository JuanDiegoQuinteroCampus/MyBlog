import config from "../storage/config.js";
export default {
  

  showartitlefull(){
    config.dataMyArticle();
    Object.assign(this, JSON.parse(localStorage.getItem("myarticle")));

    const ws = new Worker("storage/wsMyarticle1.js", {type:"module"});
    let id=[];
    let count = 0;
    ws.postMessage({module:"showartitle", data:this.total});
    
    id=["#Firehose", "#informacion1"];
    ws.addEventListener("message",(e)=>{
        let doc = new DOMParser().parseFromString(e.data,"text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==count) ? ws.terminate(): count++;
        
    })
  }
}

/* export default {
    total:[ 
        
        {
        informacion:{
            name:"Conduce con cuidado pero disfrutalo",
            titulo:"The first MotorBike",
            hecho:"January 1, 1817 by",
            enlace:"Karl Drais",
            href:"https://es.wikipedia.org/wiki/Karl_Drais",
            texto1:"La historia de la primera motocicleta se remonta a 1817, cuando el barón alemán Karl Drais inventó la máquina corredora, un vehículo de dos ruedas impulsado por la fuerza humana que se desplazaba mediante el equilibrio del conductor.",
            texto2:"Sin embargo, la primera motocicleta propiamente dicha fue creada en 1885 por el ingeniero alemán Gottlieb Daimler, quien construyó un motor de combustión interna montado en un bastidor de bicicleta para crear una motocicleta motorizada, lo que marcó un hito en la evolución del transporte personal y el surgimiento de la industria de las motocicletas.",
            titulo2:"Sample blog post",
            corto:"La idea de la primera motocicleta surgió en el contexto del desarrollo de la bicicleta",
            corto2:"Un vehículo de dos ruedas impulsado por la fuerza humana que se desplazaba mediante el equilibrio del conductor",
            texto3:" La necesidad de aumentar la velocidad y la eficiencia de la bicicleta llevó a la creación de la primera motocicleta propiamente dicha en 1885, cuando el ingeniero alemán Gottlieb Daimler montó un motor de combustión interna en un bastidor de bicicleta para crear una motocicleta motorizada.",
            titulo3:"Otras motos creadas",
            texto4:"Las primeras motocicletas del mundo fueron creadas a finales del siglo XIX y principios del siglo XX. Algunos de los primeros fabricantes de motocicletas incluyen a marcas como:",
            lista1:{
                num1:"Werner",
                num2:"Hildebrand & Wolfmüller",
                num3:" Indian",
                 },
            corto3:"Ademas de:",
            lista2:{
                num1:"Harley-Davidson",
                num2:"Triumph",
                num3:"Norton y BSA",
                 },
            corto4:"Estas primeras motocicletas eran relativamente simples y tenían motores de combustión interna de un solo cilindro, y se convirtieron en un medio de transporte popular y económico para muchas personas en todo el mundo..",
            negrita1:"Harley-Davidson",
            texto5:"es una marca de motocicletas estadounidense fundada en 1903 en Milwaukee, Wisconsin, por William S. Harley y los hermanos Arthur y Walter Davidson. La compañía es conocida por producir motocicletas de alta calidad y alta potencia, y es considerada una de las marcas más icónicas en la industria de las motocicletas. La Harley-Davidson se ha utilizado en películas, programas de televisión y en la cultura popular en general, convirtiéndose en un símbolo de la cultura de la motocicleta y de la libertad individual.",
            negrita2:"Triumph",
            texto6:"Triumph es una marca de motocicletas británica fundada en Coventry en 1902. La compañía se hizo conocida por su innovación en el diseño de motores de cuatro tiempos y se convirtió en un fabricante importante durante la Primera Guerra Mundial, suministrando motocicletas para el ejército británico.",
            negrita3:"Norton",
            texto7:"Norton es una marca de motocicletas británica fundada en Birmingham en 1898. La compañía es conocida por su éxito en carreras de motocicletas y por la producción de motocicletas de alta calidad y alto rendimiento. Durante la Segunda Guerra Mundial, Norton produjo motocicletas para el ejército británico y después de la guerra, se centró en la producción de motocicletas deportivas y cruceros de alta gama. ",
            titulo4:"Partes de una moto",
            texto8:"Las partes principales de una motocicleta incluyen:",
            enlace2:"partes de moto",
            href2:"https://aprende.com/blog/oficios/motocicletas/partes-de-una-moto/",
            lista3:{
                num1:"Motor: es el corazón de la moto, proporciona la potencia necesaria para impulsarla.",
                num2:"Chasis: es el armazón de la moto, compuesto por el cuadro, las ruedas, la suspensión, la dirección y el freno.",
                num3:"Sistema de escape: el sistema de escape es el encargado de eliminar los gases de escape producidos por el motor.",
                num4:"Transmisión: la transmisión es el conjunto de componentes que transmiten la potencia del motor a las ruedas traseras de la moto.",
                num5:"Sistema eléctrico: es el encargado de suministrar energía eléctrica a la moto y proporcionar energía a los componentes eléctricos, como faros, luces traseras, indicadores de dirección y bocina.",
                num6:"Sistema de frenos: el sistema de frenos es el encargado de detener la moto y está compuesto por frenos de disco o tambor en ambas ruedas.",
                 },
            corto5:"Estas son las principales para que pueda andar la moto",
            titulo5:"Dato de seguridad",
            texto9:"La seguridad es un factor muy importante al conducir una motocicleta. Es importante usar casco, guantes, chaqueta y pantalones con protecciones, botas y gafas de protección.",
            titulo6:"Dato curioso",
            texto10:"La industria de las motocicletas tiene un gran impacto en la economía mundial, con numerosas empresas que producen motocicletas y accesorios, así como con una gran cantidad de tiendas y talleres de reparación y mantenimiento de motocicletas. Además, las carreras de motocicletas también son un importante atractivo para el turismo y las ciudades acogen regularmente eventos de carreras de motocicletas.",
            corto6:"Conoce tú moto",
            texto11:" Conocer nuestra motocicleta es fundamental para nuestra seguridad, confort y el mantenimiento adecuado de la moto, lo que a su vez nos ayuda a prolongar su vida útil y mantener su valor.",
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
          <p class="blog-post-meta">${val.informacion.hecho} <a href="${val.informacion.href}">${val.informacion.enlace}</a></p>

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
              href=${val.informacion.href2}>${val.informacion.enlace2}</a>.</p>
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
 */