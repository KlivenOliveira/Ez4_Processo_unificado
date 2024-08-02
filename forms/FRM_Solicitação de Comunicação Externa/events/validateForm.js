
 function validateForm(form){
  var numeroAtividadeAtual = getValue("WKNumState");
  
  

    var msg="";
   
    
 if(numeroAtividadeAtual ==1){
    if(form.getValue("solicitacao")== null){
    	 msg +="Campo de solicitação não foi selecionado \n" ;
    }
 }
 



if(numeroAtividadeAtual ==1 ||numeroAtividadeAtual ==5 ||numeroAtividadeAtual == 25){
if(form.getValue("sct_veiculacao")== null){
     msg +="Campo de veiculação não foi selecionado \n" ;
}

if(form.getValue("Direcionamento_da_comunicao")== null){
     msg +="Campo de direcionamento de comunicação não foi selecionado \n" ;
}
 
}


if(form.getValue("input_contexto")==""){
     msg += "Campo contexto não foi preenchido \n" ;
}
    		

    if(form.getValue("input_dta")==""){
        msg +=" Campo data não foi preenchido \n";
   } 

   if(form.getValue("input_area")==""){
    msg +=" Campo area não foi preenchido \n";
    } 
   
   if(form.getValue('solicitacao')=='interna'){
   if(form.getValue("input_tamanho")==""){
	    msg +=" Campo tamanho não foi preenchido \n";
	    } 
   }

     if(numeroAtividadeAtual == 2 || numeroAtividadeAtual == 6 || numeroAtividadeAtual == 27 || numeroAtividadeAtual == 32 || numeroAtividadeAtual == 36 || numeroAtividadeAtual == 49)  
          {
          if(form.getValue("decisao_oculto")== 2){
               msg +="Selecione Aprovar/reprovar ou alterar se houver \n";
     }
          }

   if (msg !="") {
	    throw msg + "\n"
		
}
 }