export default {
    dataMyHeader(){
        localStorage.setItem("myheader", JSON.stringify({

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

        }))
    },
    dataMyBanner (){
        localStorage.setItem("mybanner", JSON.stringify({
            imagen:{image:"../img/jum.jpeg",},
            texto:{title:{name:"MotosRacing"},
            contenido:{name:"Una motocicleta, comúnmente conocida en español con la abreviatura moto, es un vehículo de dos ruedas,​ impulsado por un motor de combustión interna a gasolina que acciona la rueda trasera, en raras excepciones en las que el impulso se daría en la rueda delantera o en ambas, superior a 50 cc. si es de combustión interna y con una velocidad máxima por construcción superior a 45 km/h.​ El cuadro o chasis y las ruedas constituyen la estructura fundamental del vehículo. La rueda directriz es la delantera. Pueden transportar hasta dos personas, y tres si están dotadas de sidecar."},
            continue:{name:"Continue reading..."},
            btn: {href:"https://es.wikipedia.org/wiki/Motocicleta"},},
        }))
    },
    dataMypost(){
        localStorage.setItem("mypost", JSON.stringify({
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
        }))
    },
    dataMyArticle(){
        localStorage.setItem("myarticle", JSON.stringify({
total: {
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
      }
    },
        }))
    },
    dataMyArticle2(){
        localStorage.setItem("myarticle2", JSON.stringify({
            total2:{
      
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
            },
        }))
    },
    dataAside(){
        localStorage.setItem("myaside", JSON.stringify({
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
        }))
    },
    dataMyFooter(){
        localStorage.setItem("myfooter", JSON.stringify({
            footerx:
            {   
                texto:"Blog hecho gracias a ",
                href:"https://getbootstrap.com/",
                enlace:"Bootstrap",
                by:"by",
                href2:"https://github.com/JuanDiegoQuinteroCampus",
                by2:"JuanDiegoQuintero",
                Back:"Volver arriba",
            }
        ,
        }))
    }
}