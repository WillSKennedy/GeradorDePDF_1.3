var pdf = require("html-pdf");
var ejs = require("ejs"); // view engine



var nomeDoUsuario = "";
var curso = "";
var categoria =""




    ejs.renderFile("./exportar.ejs",{nome: nomeDoUsuario, curso: curso, categoria: categoria }, (err, html) => {
        if(err){
            console.log("ERRO!");
        }else{
            pdf.create(html, {}).toFile("./sucessoPDF.pdf",(err, res) => {
                if(err){
                    console.log("UM ERRO ACONTECEU :( ");
                }else{
                    console.log(res);
                }
                }
            )
        }
        
    } );



