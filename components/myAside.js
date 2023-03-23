export default {
  nav:[
    {
        title:"About",
        paragranph:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum corporis aperiam, dolorem sequi neque fugit iste praesentium! Tempore quisquam cum perferendis asperiores libero error, eos a vero consequatur, autem fuga.",
    },
    {
        title:"Archives",
        link:[
            {
                name:"Abril 2",
                href:"#",
            },
            {
                name:"Abril 3",
                href:"#",
            },
            {
                name:"Abril 4",
                href:"#",
            },
            {
                name:"Abril 5",
                href:"#",
            }
        ]
    },
    {
      title:"Elsewhere",
      link:[
          {
              name:"GitHub",
              href:"#",
          },
          {
            name:"Instagram",
            href:"#",
          },
          {
            name:"Facebook",
            href:"#",
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
  
}