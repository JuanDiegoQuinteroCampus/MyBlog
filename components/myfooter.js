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
            <p>${val.footer.texto} <a href=${val.footer.href}>${val.footer.enlace}</a> by <a
        href=${val.footer.href2}>${val.footer.by2}</a>.</p>
    <p>
      <a href="#">${val.footer.back}</a>
    </p>`);
})
}
}      
