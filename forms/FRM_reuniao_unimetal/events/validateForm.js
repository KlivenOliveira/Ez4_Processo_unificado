function validateForm(form){
	var numeroAtividadeAtual = getValue("WKNumState");
    var selecionado = form.getValue("slct_principal")


    var msg = "";

    if (numeroAtividadeAtual ==4){
        if(form.getValue("hid_value")==1){
            msg +="Aprove imediatamente "
        }

    }

    if (numeroAtividadeAtual <4){
	if(selecionado == null){
        msg += "Selecione o tipo de reunião"
    }
}

    if (selecionado == 1 && numeroAtividadeAtual !=10){
        if (form.getValue("slct_neworalt") == null) {
            msg += "Campo criação ou alteração não foi preenchido \n";
        }
        if (form.getValue("txt_caso") == '') {
            msg += "Campo Link não foi preenchido \n";
        }

    }
    

    if (numeroAtividadeAtual == 10){
        if(form.getValue("txa_detalhes") ==""){
            msg += "Detalhes da reunião não foram informados \n";
        }
         if(form.getValue("txt_fin_reuniao") ==""){
            msg += "Finalidade da reunião não foi atribuida \n"; 
          }
          if(form.getValue("#date_reuniao")==""){
            msg += "Data e hora de reunião não foi preechida \n ";
          }
          if(form.getValue("#slct_cond")==""){
            msg += "Selecione se houve má condulta \n";
          }

          if(form.getValue("spa_obrigatorio")==1 && form.getValue("txa_denuncia")==""){
                 msg += "informe o tipo de má condulta \n";
          }

          if(form.getValue("#txa_presenca")==""){
            msg += "Informe os presentes na reunião \n";
          }

          if(form.getValue("#txt_local")==""){
            msg += "Informe o local da reunião \n";
          }
}

        if (selecionado == 2){
            if(form.getValue("slct_tiporeuniao") == null){
                msg +="informe o tipo de reunião \n";
            }
            if(form.getValue("txt_finalidade")==""){
                msg +="informe a finalidade da reunião \n"
            }
            if(form.getValue("txt_orgao_publico")==""){
                msg +="Informe o orgão público envolvido \n"
            }
            if(form.getValue("txt_Agente")==""){
                msg +="Informe o nome do  público envolvido \n"
            }

            if(form.getValue("txt_edop")==""){
                msg +="Informe o endereço do orgão público \n"
            }

            if(form.getValue("txt_funcionario")==""){
                msg +="Informe o funcionario representante \n"
            }

            if(form.getValue("txt_convidado")==""){
                msg +="Informe o convidado representante \n"
            }
            if(form.getValue("slct_inici_contato")==null ){
                msg +="Informe o tipo de contato \n"
            }

            if(form.getValue("slct_anexo")==null ){
                msg +="Informe se anexou o contato \n"
            }
        }

       
    
    if (msg != "") {
        throw msg 
    }
}
	
