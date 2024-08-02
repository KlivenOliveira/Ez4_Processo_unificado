


function validaForms(){
   
    const aCamposObgr = ["txt_passageiro","txt_email","sc_aprovada","txt_cpf","dte_nasc","txt_projeto"]
    const labels = new Array()
    let trigger = false

    for (i = 0; i<aCamposObgr.length;i++){
        const field = $('#'+aCamposObgr[i])
        let label = $('#'+aCamposObgr[i]+'_l');

        if(field.val() == '' || field.val() ==null){
            var labelText = label.text();
            field.addClass('teste')
        //    labelText.indexOf("*") >= 0 ? labelText.replace("*", "") : labelText;
            if(labels.indexOf(labelText)=== -1) labels.push(labelText);
                trigger = true
            
        }
    }

    if(labels.length >0){
        let li
    for (k = 0;k<labels.length;k++){
        li +=   "<li class='list-group-item gray-text'><strong style=color:#dc3545>" +
        labels[k] +
        "</strong></li>";
            } 
 li = li.replace(undefined, "");
    let ul = "<ul class='list-group list-group-flush'>" + li + "</ul>";

        if (trigger) {
            FLUIGC.toast({
                title: "Atenção: ",
                message: "Preencher os campos: <br />" + ul,
                type: "danger",
            });
            return false;
        }
    }
}

    
    
    