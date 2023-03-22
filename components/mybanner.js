export default {
    image:"../img/jum.jpeg",
    showImage(){
        document.querySelector(".imgStyle").style.backgroundImage = `url(${this.image})`;
    },

    title:{name:"MotosRacing"},
    contenido:{name:"Una motocicleta, comúnmente conocida en español con la abreviatura moto, es un vehículo de dos ruedas,​ impulsado por un motor de combustión interna a gasolina que acciona la rueda trasera, en raras excepciones en las que el impulso se daría en la rueda delantera o en ambas, superior a 50 cc. si es de combustión interna y con una velocidad máxima por construcción superior a 45 km/h.​ El cuadro o chasis y las ruedas constituyen la estructura fundamental del vehículo. La rueda directriz es la delantera. Pueden transportar hasta dos personas, y tres si están dotadas de sidecar."},
    continue:{name:"Continue reading..."},
    btn: {href:"https://es.wikipedia.org/wiki/Motocicleta"},

    showSectionBanner(){
        document.querySelector("#banner").insertAdjacentHTML("beforeend",`<h1 class="display-4 fst-italic">${this.title.name}</h1>
        <p class="lead my-3">${this.contenido.name}</p>
        <p class="lead mb-0"><a href="${this.btn.href}" target="_blank" class="text-white fw-bold">${this.continue.name}</a></p>`)
    }
}
