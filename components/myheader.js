export default {
    title: {name:"Motorbikes", 
        href:"#"},
    

    company: [
        {
        name:"Historia",
        href:"#"
    },
        {
        name:"Motor",
        href:"#"
        },

        {
        name:"Transmisión",
        href:"#"
        },
           
        {
        name:"Cilindrada",
        href:"#"
        },
            
        {
        name:"Tipos de motocicleta",
        href:"#"
        },

        {
        name:"Componentes(csf)",
        href:"#"
        },
    ],

    listTitle(){
        
        document.querySelector("#title").insertAdjacentHTML("beforeend",
        `<a class="blog-header-logo text-dark" href="#">${this.title.name}</a>`)
    },

    listarcompany(){
        let plantilla = "";
        this.company.forEach((val,id) => {
            plantilla += `<a class="p-2 link-secondary " href="${val.href}">${val.name}</a>`
        });
        document.querySelector("#company").insertAdjacentHTML("beforeend", plantilla);
    }
    
}


