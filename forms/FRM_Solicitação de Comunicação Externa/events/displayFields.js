function displayFields(form,customHTML){
var numeroAtividadeAtual = getValue("WKNumState");
customHTML.append("<script type='text/javascript'>");
customHTML.append("var numeroAtividadeAtual = " + numeroAtividadeAtual + ";");
customHTML.append("</script>");


if(numeroAtividadeAtual == 2 || numeroAtividadeAtual == 6){
	customHTML.append("<script>");
	customHTML.append("$('.aprovacao').show();")
	customHTML.append("</script>");
}

if(numeroAtividadeAtual >1){
	customHTML.append("<script>");
	customHTML.append("$('#panel-body').show();")
	customHTML.append("$('#panel-heading').hide();")
	customHTML.append("</script>");
}

}
