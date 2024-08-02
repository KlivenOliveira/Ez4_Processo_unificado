function displayFields(form,customHTML){
    var atv = getValue("WKNumState");
    var MODE = form.getFormMode()
	var MOBILE = form.getMobile();
    form.setHidePrintLink(true);
    form.setShowDisabledFields(true);


    customHTML.append("<script type='text/javascript'>");
    customHTML.append("var numeroAtividadeAtual = " + atv + ";");
    customHTML.append("</script>");




   customHTML.append("<script type='text/javascript'>");
   customHTML.append("function getMobile(){ return " + MOBILE + "};")
   customHTML.append("function getMode(){ return '" + MODE + "'};")
   customHTML.append("</script>");



   
   customHTML.append("<script type='text/javascript'>");
   customHTML.append("displayBtnFiles();");
   customHTML.append("</script>"); 

    	
	//customJS += "function getAtividade(){ return '" + ATIVIDADE + "'};";
	// customJS += "function getMobile(){ return " + MOBILE + "};";


	
 }

