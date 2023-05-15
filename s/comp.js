const component = {
    cajaText: ({img,text},d) =>{
        return `
            <div class="sombra">
               <picture>
                  <img src="${img}" alt="">
               </picture>
               <p>${d ? "<strong> Diplomado </strong>" : ""}  ${text} </p>
            </div> 
        `
    }
}