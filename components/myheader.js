export default {
    title: {name:"Motorbikes", 
        href:"#"},
    

    company: [
        {
        name:"Historia",
        href:"https://es.wikipedia.org/wiki/Motocicleta"
    },
        {
        name:"Motor",
        href:"https://es.wikipedia.org/wiki/Motor"
        },

        {
        name:"Transmisión",
        href:"https://es.wikipedia.org/wiki/Transmisi%C3%B3n_de_motocicleta"
        },
           
        {
        name:"Cilindrada",
        href:"https://es.wikipedia.org/wiki/Cilindrada#:~:text=Cilindrada%20es%20la%20denominaci%C3%B3n%20que,equivalen%20a%20una%20pulgada%20c%C3%BAbica."
        },
            
        {
        name:"Tipos de motocicleta",
        href:"https://es.wikipedia.org/wiki/Categor%C3%ADa:Tipos_de_motocicletas"
        },

        {
        name:"Componentes(csf)",
        href:"https://es.wikipedia.org/wiki/Motocicleta#Chasis,_suspensi%C3%B3n_y_frenos"
        },
    ],

    listTitle(){
        
        document.querySelector("#title").insertAdjacentHTML("beforeend",
        `<a class="blog-header-logo text-light" href="#">${this.title.name}</a>`)
    },

    listarcompany(){
        let plantilla = "";
        this.company.forEach((val,id) => {
            plantilla += `<a class="p-2 link-light " href="${val.href}">${val.name}</a>`
        });
        document.querySelector("#company").insertAdjacentHTML("beforeend", plantilla);
    }
    
}


