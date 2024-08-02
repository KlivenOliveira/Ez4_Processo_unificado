var aprovacao_diretoria = 4;
var reuniao_realizada = 10; 
var atvJS = '';
var carimbo = $("<button></button>")


$(document).ready(function(){
    console.log(aprovacao_diretoria)
    console.log(reuniao_realizada)
    atvJS =  numeroAtividadeAtual;
    fenableJs()
    validaFinal()

})



function validaFinal(){
    var UltimaDiv =  $('#UltimaDiv');
    if (atvJS == 8){
        UltimaDiv.append(carimbo)
        carimbo.text('O processo foi reprovado')
        carimbo.addClass('btn btn-danger btn-lg btn-block btn-sem_cursor')
    }


    if (atvJS == 12){
        UltimaDiv.append(carimbo)
        carimbo.text('O processo foi Aprovado')
        carimbo.addClass('btn btn-success btn-lg btn-block btn-sem_cursor')
    }
    return carimbo
}

function fenableJs(){
    if (atvJS >3 && atvJS != 10  ){
        fReadOnly();
        fdisabled();
    }
}

const fReadOnly = ()=> {
    $("input, textarea").prop("readonly", true);
}

const fdisabled =()=>{
    $("select").prop("disabled", true);
    $('#slct_principal').prop("disabled",true)
}

$("input, textarea").prop("readonly", true);

function fTextArea(select,txtarea){
if ($(select).val() == 'opt_1s'  || $(select).val() == "opt_2s") {
    $('#spa_obrigatorio').html('*')
    $('#spa_obrigatorio').val(1)
    $(txtarea).prop('readonly',false)
}else {
    $(txtarea).prop('readonly',true)
    $('#spa_obrigatorio').html('')
    $('#spa_obrigatorio').val(0)
}
}

function fplaceholder(select,TextArea){
    if ($(select).val() == 'opt_f1'){
        ($(TextArea).attr('placeholder','Criação de  fluxo'))
    } else if ($(select).val() == 'opt_f2'){
        ($(TextArea).attr('placeholder','Altereção de fluxo'))
    }
}


function fseVirtual(select,txtarea){
if($(select).val() =='opt_virtual' || $(select).val() =='opt_sa'){
    $(txtarea).prop('readonly',false)
    
}else{
    $(txtarea).prop('readonly',true)
}}


function addShow() {
	var selecionado = $("#slct_principal").val()
	if (selecionado == "1") {
		$("#panel-regu").show();
        $("#panel-norm").hide();
	} else if (selecionado == "2") {
		$("#panel-norm").show();
        $("#panel-regu").hide();
    }
    console.log("FUNCIONANDO")
}


function wrk_process(param){
    $('#hid_value').val(param)
    if(param == 0){
        $("#btn_reprovar").addClass("btn-danger");
        $("#btn_aprovar").removeClass("btn-success");
            FLUIGC.toast({
                title: 'Reprovacao' ,
                message: 'Processo sera reprovado',
                type: 'danger'
                });
                }
    else if(param == 2){
        $("#btn_aprovar").addClass("btn-success");
        $("#btn_reprovar").removeClass("btn-danger");
        FLUIGC.toast({
			title: 'Aprovação' ,
			message: 'Processo sera aprovado',
			type: 'success'
			})  
     }
}


