
function validateForm(form) {
    var numeroAtividadeAtual = getValue("WKNumState");

    var msg = "";

    if (form.getValue("txt_passageiro") == "") {
        msg += "Campo nome de passageiro não foi preenchido \n";
    }

    if (form.getValue("txt_email") == "") {
        msg += "Campo de email  não foi preenchido \n";
    }


    if (form.getValue("txt_cpf") == "") {
        msg += " Campo de cpf não foi preenchido \n";
    }

    if (form.getValue("txt_projeto") == "") {
        msg += " Campo de projeto não foi preenchido \n";
    }

    if (form.getValue("dte_nasc") == "") {
        msg += " Data de nascimento não foi preenchido... \n";
    }


    if(numeroAtividadeAtual == 2){
        msg = '';
        if(form.getValue("decisao_oculta")== 1){
             msg +="Selecione Aprovar ou reprovar  \n";
   }
}
    if( numeroAtividadeAtual == 6){
        msg = '';
        if(form.getValue("decisao_oculta")== 1){
            msg +="Selecione Aprovar, reprovar ou alterar  \n";
    }
}


                if (msg != "") {
                    throw msg + "\n"
                }
            }
        