var grid = document.querySelector("#mostrarmeme")
var texto = ""

window.addEventListener("load", function(){

    const valores = this.fetch('https://api.imgflip.com/get_memes').then(res=>{
            res.json().then(dados=>{
                for(i = 0; i < dados.data.memes.length ; i++)                {
                    mostarMeme(dados.data.memes[i])
                }
            })
        }
    )

});



function mostarMeme(dados){
    var nome = dados.name
    var imagem = dados.url
    texto += "<div class='item'>"
            + "<p class='title'>Nome: "+nome+"</p>"
            + "<img src='"+imagem+"'>"
            + "<p class='description'>Um meme de qualidade para você dar uma risadinha que irá alegrar seu dia.</p>"
            + "</div>"

    grid.innerHTML = texto        
}

