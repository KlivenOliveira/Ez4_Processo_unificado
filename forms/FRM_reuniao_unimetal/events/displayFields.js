function displayFields(form,customHTML){
	var atv = getValue("WKNumState")
    
    customHTML.append("<script type='text/javascript'>");
    customHTML.append("var numeroAtividadeAtual = " + atv + ";");
    customHTML.append("</script>");
    



if(atv == 4 &&  form.getValue('slct_principal') == 1 ){
	customHTML.append("<script>");
    customHTML.append("$('#panel-regu').show();")
    customHTML.append("$('#Aprovacao').show();")
	customHTML.append("</script>");
	}

    if(atv == 4 &&  form.getValue('slct_principal') == 2 ){
        customHTML.append("<script>");
        customHTML.append("$('#panel-norm').show();")
        customHTML.append("$('#Aprovacao').show();")
        customHTML.append("</script>");
        }

   /* if(atv <4){
    customHTML.append("<script>");
	customHTML.append("$('#panel-inic').show();")
	customHTML.append("</script>");
    }*/

    if(atv == 10){
        customHTML.append("<script>");
        customHTML.append("$('#panel-reg-real').show();")
        customHTML.append("</script>");
    }

    if( atv == 12 && form.getValue('txt_caso') != '' ){
        customHTML.append("<script>");
        customHTML.append("$('#panel-regu').show();")
        customHTML.append("$('#panel-reg-real').show();")
        customHTML.append("</script>");
    }

    if( atv == 12 && form.getValue('txt_finalidade') != '' ){
        customHTML.append("<script>");
        customHTML.append("$('#panel-norm').show();")
        customHTML.append("$('#panel-reg-real').show();")
        customHTML.append("</script>");
    }


    if( atv == 8 && form.getValue('txt_caso') != '' ){
        customHTML.append("<script>");
        customHTML.append("$('#panel-regu').show();")
        customHTML.append("</script>");
    }

    if( atv == 8 && form.getValue('txt_finalidade') != '' ){
        customHTML.append("<script>");
        customHTML.append("$('#panel-norm').show();")
        customHTML.append("</script>");
    }

}

