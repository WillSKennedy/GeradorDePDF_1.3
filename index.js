var pdf = require("html-pdf");
var ejs = require("ejs"); // view engine

var nomeDoUsuario = "William Rocha";
var curso = "Engenharia da Computaçao";
var categoria ="Javascript";

ejs.renderFile("./meuarquivo.ejs",{nome: nomeDoUsuario, curso: curso, categoria: categoria }, (err, html) => {
    if(err){
        console.log("ERRO!");
    }else{
        pdf.create(html, {}).toFile("./meupdflindao.pdf",(err, res) => {
            if(err){
                console.log("UM ERRO ACONTECEU :( ");
            }else{
                console.log(res);
            }
            }
        )
    }
    
} );


