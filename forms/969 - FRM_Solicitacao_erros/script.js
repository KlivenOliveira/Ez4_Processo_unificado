var inicio = 3;
var necessario_abertura = 4;
var abertura_chamado = 8;
var problema_resolvido = 10;
var retorno_solicitante = 14;
var valorOculto = $('#hid_value').val()
var atvJS = ''



$(document).ready(function () {
    atvJS = numeroAtividadeAtual
    valorOculto = 1;
    wrk_process_inic()
})


function validaForms() {

  
    var labels = new Array()
    const aCamposObgr = ["txt_nome", "txt_matricula", "txt_CPF", "slct_coligada", "slct_erro"]
    var vControl = false

    for (var i = 0; i < aCamposObgr.length; i++) {
        const field = $('#' + aCamposObgr[i])
        let label = $("#" + aCamposObgr[i] + "_l");


        if  (field.val() == '' || field.val() == null) {
            var labelText = label.text();
            labelText =
            labelText.indexOf("*") >= 0 ? labelText.replace("*", "") : labelText;
            if (labels.indexOf(labelText) === -1) labels.push(labelText);
            vControl = true;    
        }
    }
    if (labels.length > 0) {
        let li;
        for (let k = 0; k < labels.length; k++) {
            li +=
                "<li class='list-group-item gray-text'><strong style=color:#dc3545>" +
                labels[k] +
                "</strong></li>";
        }
        li = li.replace(undefined, "");
        let ul = "<ul class='list-group list-group-flush'>" + li + "</ul>";
        if (vControl) {
            FLUIGC.toast({
                title: "Atenção: ",
                message: "Preencher os campos: <br />" + ul,
                type: "danger",
            });
            return false;
        }
    }
    let hasError = "";
        if (invalidFile("fnCpf")) {
            hasError += "<li style='margin-bottom: 5px;'>Anexo <b>Arquivo anexado </b> não encontrado.</li>";

    }

    if (hasError) {
        let aviso = "A solicitação não pode ser enviada pois apresenta os seguintes erros:"
        let erros = `<br/><br/><ul style='padding-left: 17px;color: red;list-style: disc;'>${hasError}</ul><br/>`;
        throw (`<b>${aviso}</b>${erros}`);
    }
}


    // if (input_texto == '') {
    //     msgErro += "<li style='margin-bottom: 5px;'>Campo Nome não preenchido</li>";
    // }
    // if (msgErro != "") {
    //     msgErro = "<ul style='padding-left: 17px;color: red;list-style: disc;'>" + msgErro + "</ul><br/>";
    //     FLUIGC.toast({
    //         title: 'Atencao',
    //         message: msgErro,
    //         type: 'danger'
    //     });
    // }
    // return false;




function wrk_process_inic() {
    frm_retorno_resposta()
    frm_progress_btn()
    wrk_process()
    frm_progress_pergunta()
   
}

function frm_retorno_resposta() {
    if (atvJS == retorno_solicitante) {
        $('#ultimaRow').append('<label for="txa_retorno" class="control-label">Descreva detalhes dos erros</label>')
        $('#ultimaRow').append('<textarea class="form-control" rows=3 name="txa_retorno" id="txa_retorno"></textarea>')
    }
}

function frm_progress_btn() {
    if (atvJS == 4 || atvJS == 10) {
        $('#btn_aprovar').text('Sim')
        $('#btn_reprovar').text('Não')
    } else {
        $('#btn_aprovar').text('Bloqueado')
        $('#btn_reprovar').text('Bloqueado')
    }
}


function frm_progress_pergunta() {
    if (atvJS == 4) {
        $('#text_perguntaFinal').text('Necessita abertura de chamado?')
        desabilitar_click()
    }

    if (atvJS == 10) {
        $('#text_perguntaFinal').text('Problema foi resolvido?')
        desabilitar_click()
    }

}


function desabilitar_click() {
    $('#btn_aprovar').prop('disabled', false)
    $('#btn_reprovar').prop('disabled', false)
}



function wrk_process(param) {
    $('#hid_value').val(param)
    if (param == 0 && atvJS == 4) {
        $("#btn_reprovar").addClass("btn-danger");
        $("#btn_aprovar").removeClass("btn-success");
        valorOculto = 0
        FLUIGC.toast({
            title: 'Necessita abertura Chamado?',
            message: 'Resposta:Não',
            type: 'danger'
        });
    }
    else if (param == 2 && atvJS == 4) {
        $("#btn_aprovar").addClass("btn-success");
        $("#btn_reprovar").removeClass("btn-danger");
        valorOculto = 2
        FLUIGC.toast({
            title: 'Necessita abertura Chamado?',
            message: 'Resposta:Sim',
            type: 'success'
        })
    }
    if (param == 0 && atvJS == 10) {
        $("#btn_reprovar").addClass("btn-danger");
        $("#btn_aprovar").removeClass("btn-success");
        valorOculto = 0
        FLUIGC.toast({
            title: 'Problema não foi resolvido?',
            message: 'Resposta:Não',
            type: 'danger'
        });
    }
    else if (param == 2 && atvJS == 10) {
        $("#btn_aprovar").addClass("btn-success");
        $("#btn_reprovar").removeClass("btn-danger");
        valorOculto = 2
        FLUIGC.toast({
            title: 'Problema foi resolvido?',
            message: 'Resposta:Sim',
            type: 'success'
        })
    }
}



