export default {
    footer:[
        {   
            texto:"Blog hecho gracias a ",
            href:"https://getbootstrap.com/",
            enlace:"Bootstrap",
            by:"by",
            href2:"https://github.com/JuanDiegoQuinteroCampus",
            by2:"JuanDiegoQuintero",
            Back:"Volver arriba",
        }
    ],
    showfooter(){
        this.footer.forEach((val,id)=>{
            document.querySelector("#footer").insertAdjacentHTML("beforeend", `
            <p>${val.texto} <a href=${val.href}>${val.enlace}</a> by <a
        href=${val.href2}>${val.by2}</a>.</p>
    <p>
      <a href="#">${val.Back}</a>
    </p>`);
})
}
}      
