import config from "../storage/config.js";
export default {

    show(){
        config.dataMyHeader();
        Object.assign(this, JSON.parse(localStorage.getItem("myheader")));

        const ws = new Worker("storage/wsMyHeader.js", {type:"module"});
        let id=[];
        let count = 0;
        ws.postMessage({module:"listTitle", data:this.title});
        ws.postMessage({module:"listCompany", data:this.company});
        id=["#title", "#company"];
        ws.addEventListener("message",(e)=>{
            let doc = new DOMParser().parseFromString(e.data,"text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count) ? ws.terminate(): count++;
            
        })
    }
    
}


