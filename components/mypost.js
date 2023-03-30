import config from "../storage/config.js";
export default {
    
    showPost(){
        config.dataMypost();
        Object.assign(this, JSON.parse(localStorage.getItem("mypost")));

        const ws = new Worker("storage/wsMypost.js", {type:"module"});
        let id=[];
        let count = 0;
        ws.postMessage({module:"showPost", data:this.post1});
        ws.postMessage({module:"showPost", data:this.post2});
        ws.postMessage({module:"showPost", data:this.post3});
        ws.postMessage({module:"showPost", data:this.post4});
        id=["#mypost1","#mypost2","#mypost3","#mypost4"];
        ws.addEventListener("message",(e)=>{
            let doc = new DOMParser().parseFromString(e.data,"text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count) ? ws.terminate(): count++;
            
        })
    }

}


/* export default {
    post1: [
        {
            article: "Moto Deportiva",
            title: "Motos deportivas",
            date: "Nov 12",
            paragraph: `Moto con características de conducción más agresivas que las de una motocicleta de turismo. Para correr `,
            btn:{
                name: "Continue reading",
                href: "https://es.wikipedia.org/wiki/Motocicleta_deportiva"
            },
            image: "/img/post1.png"
        }
    ],
    post2: [
        {
            article: "FirstMotorbike",
            title: "La Primera Moto",
            date: "1817-1885 ",
            paragraph: `La primera motocicleta propiamente dicha fue creada en 1885 por el ingeniero alemán Gottlieb Daimler.`,
            btn:{
                name: "Continue reading",
                href: "https://ducatimadrid.com/noticias/quien-invento-la-moto/#:~:text=El%20estadounidense%20Sylvester%20Howard%20Roper,que%20son%20hoy%20en%20d%C3%ADa."
            },
            image: "/img/post2.jpg"
        }
    ],
    post3: [
        {
            article: "FirstMotorbikeRunner",
            title: "Primera Moto Deportiva",
            date: "1969-2003",
            paragraph: `La CB750 fue la primera motocicleta en presentar un motor de cuatro cilindros , lo que mejoró  su rendimiento y aceleración.
            `,
            btn:{
                name: "Continue reading",
                href: "https://es.wikipedia.org/wiki/Honda_CB750"
            },
            image: "/img/post3.jpg"
        }
    ],
    post4: [
        {
            article: "TheFastestMotorBike",
            title: "Kawasaki Ninja H2R",
            date: "Nov, 2014",
            paragraph: `Tiene una potencia máxima de 310 caballos de fuerza. La Ninja H2R es capaz de alcanzar velocidades superiores a los 400 km/h`,
            btn:{
                name: "Continue reading",
                href: "https://www.kawasaki.com/motorcycle/ninja/h2r"
            },
            image: "/img/post4.jpg"
        }
    ],
    showPost(){
        this.post1.forEach((val,id)=>{
            document.querySelector("#mypost1").insertAdjacentHTML("beforeend", `
            
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
            
            `);
        })
        this.post2.forEach((val,id)=>{
            document.querySelector("#mypost2").insertAdjacentHTML("beforeend", `
            
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
            
            `);
        })
        this.post3.forEach((val,id)=>{
            document.querySelector("#mypost3").insertAdjacentHTML("beforeend", `
            
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
            
            `);
        })
        this.post4.forEach((val,id)=>{
            document.querySelector("#mypost4").insertAdjacentHTML("beforeend", `
            
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
            
            `);
        })
    }

}

 */