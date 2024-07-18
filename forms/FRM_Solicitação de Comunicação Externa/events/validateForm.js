
 function validateForm(form){
  var numeroAtividadeAtual = getValue("WKNumState");

    var msg="";
    if(form.getValue("input_contexto")==""){
            msg += "Campo contexto não foi preenchido \n" ;
          
    }

    if(form.getValue("veiculacao")==""){
         msg +="    Campo veiculacao não foi preenchido \n" ;
    } 

    if(form.getValue("input_dta")==""){
        msg +=" Campo data não foi preenchido \n";
   } 

   if(form.getValue("input_area")==""){
    msg +=" Campo area não foi preenchido \n";
    } 

     if(numeroAtividadeAtual == 2 || numeroAtividadeAtual == 6){
          if(form.getValue("decisao_oculto")== 2){
               msg +="Selecione Aprovar ou reprovar  \n";
     }
}

   if (msg !="") {
	    throw msg + "\n"
		
}
 }