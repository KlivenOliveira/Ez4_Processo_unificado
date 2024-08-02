function displayFields(form,customHTML){
var numeroAtividadeAtual = getValue("WKNumState");
customHTML.append("<script type='text/javascript'>");
customHTML.append("var numeroAtividadeAtual = " + numeroAtividadeAtual + ";");
customHTML.append("</script>");



if(numeroAtividadeAtual != 2 && numeroAtividadeAtual != 6){
	customHTML.append("<script>");
	customHTML.append("$('#btn_app').hide();")
	customHTML.append("</script>");
}if(numeroAtividadeAtual ==2 && numeroAtividadeAtual !=6 ){
	customHTML.append("<script>");
	customHTML.append("$('#alterar').hide();")
	customHTML.append("</script>");
	} else{
        customHTML.append("<script>");
        customHTML.append("$('#alterar').show();")
        customHTML.append("</script>");
    }




}