import config from "../storage/config.js";
export default {
  

  showAdside(){
    config.dataAside();
    Object.assign(this, JSON.parse(localStorage.getItem("myaside")));

    const ws = new Worker("storage/wsMyAside.js", {type: "module"});
        let id = [];
        let count= 0;
        ws.postMessage({module: "showAside", data: this.nav});
        /* ws.postMessage({module: "cards", data: this.nav});
        ws.postMessage({module: "list", data: this.nav}); */
        id = ["#nav"]
        ws.addEventListener("message", (e)=>{
        
        let doc = new DOMParser().parseFromString(e.data, "text/html");
        document.querySelector(id[count]).append(...doc.body.children);
        (id.length-1==0) ? ws.terminate(): count++;
        });
  },
  
  
}
/* export default {
  nav:[
    {
        title:"About",
        paragranph:"Esta pagina se trata de mostrar un poco acerca de las motos como; su historia, motos, la moto mas rapida, la seguridad que debemos tener entre otros. Te queremos enseñar lo mas posible para que puedas aprender algo acerca de estos vehiculos de movilizacion sobre dos ruedas en general",
    },
    {
        title:"Archives",
        link:[
            {
                name:"1817",
                href:"https://issuu.com/joseluissagredofernandez/docs/historia_bici",
            },
            {
                name:"1867",
                href:"https://www.bikester.es/info/historia-bicicleta/",
            },
            {
                name:"1885",
                href:"https://es.wikipedia.org/wiki/Daimler_Reitwagen",
            },
            {
                name:"1894",
                href:"https://www.motorpasionmoto.com/clasicas/hildebrand-wolfmuller-se-vende-la-primera-moto-de-la-historia",
            }
        ]
    },
    {
      title:"Elsewhere",
      link:[
          {
              name:"GitHub",
              href:"https://github.com/JuanDiegoQuinteroCampus",
          },
          {
            name:"Instagram",
            href:"https://www.instagram.com/",
          },
          {
            name:"Facebook",
            href:"https://www.facebook.com/",
        },
      ]
  }
  ],

  showAdside(){
    
    const data = this.nav.map((val, id) => {
        return (
            (val.link)
                ? this.list(val)
                : this.cards(val)
        );
    });
    document.querySelector("#nav").insertAdjacentHTML("beforeend", data.join(""))
  },
  cards(p1){
    return `
    <div class="p-4 mb-3 bg-black rounded ">
            <h4 class="fst-italic">${p1.title}</h4>
            <p class="mb-0">${p1.paragranph}</p>
          </div>` ;
  },
  list(p1){
    return `
    <div class="p-4">
            <h4 class="fst-italic">${p1.title}</h4>
            <ol class="list-unstyled mb-0">
              ${p1.link.map((val,id) => `<li><a href="${val.href}">${val.name}</a></li>`).join("")}
              
            </ol>
          </div>
    `
  },
  
} */