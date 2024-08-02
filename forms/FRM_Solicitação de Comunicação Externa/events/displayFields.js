function displayFields(form,customHTML){
var numeroAtividadeAtual = getValue("WKNumState");
customHTML.append("<script type='text/javascript'>");
customHTML.append("var numeroAtividadeAtual = " + numeroAtividadeAtual + ";");
customHTML.append("</script>");


if(numeroAtividadeAtual == 2||numeroAtividadeAtual == 6||numeroAtividadeAtual == 27||numeroAtividadeAtual == 32||numeroAtividadeAtual == 36||numeroAtividadeAtual == 49){
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
	if(numeroAtividadeAtual ==2 || numeroAtividadeAtual ==5 || numeroAtividadeAtual ==6)
	{
	customHTML.append("<script>");
	customHTML.append("$('#tamanho').hide();")
	customHTML.append("</script>");
	}

	if (numeroAtividadeAtual == 4 && form.getValue('input_tamanho') == '' ){
		customHTML.append("<script>");
		customHTML.append("$('#tamanho').hide();")
		customHTML.append("</script>");
	}
	


 if(numeroAtividadeAtual ==32 || numeroAtividadeAtual == 2    ||  numeroAtividadeAtual == 6){
	 customHTML.append("<script>");
		customHTML.append("$('.btn-Warning').hide();")
		customHTML.append("</script>");
 }
 
}




