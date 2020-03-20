//Tão simples
var doc = new jsPDF();
// definir o tamanho da fonte...
doc.setFontSize(22);
// Adicionar texto
doc.text(20, 20, 'Meu PDF');
// adicionar outra pagina
doc.addPage();
// selecionar outro tamanho de fonte
doc.setFontSize(16);
// adicionar texto
doc.text(20, 30, 'Olá eu sou um texto!');