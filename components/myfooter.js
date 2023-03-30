import config from "../storage/config.js";
export default {
    
    showfooter(){
        config.dataMyFooter();
        Object.assign(this, JSON.parse(localStorage.getItem("myfooter")));


        const ws = new Worker("storage/wsMyFooter.js", {type:"module"});
        let id=[];
        let count = 0;
        ws.postMessage({module:"footer", data:this.footerx});
        
        id=["#footer"];
        ws.addEventListener("message",(e)=>{
            let doc = new DOMParser().parseFromString(e.data,"text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==count) ? ws.terminate(): count++;
            
        })
}
}      
