//calendario//
//var input_contexto = $('#input_contexto').val() 

$(document).ready(function () {
	
if(numeroAtividadeAtual >0 && numeroAtividadeAtual !=25  && numeroAtividadeAtual !=5 ){
	$('#input_contexto').prop('readonly',true),
	$('#input_tamanho').prop('readonly',true),
	$('#input_tamanho').prop('readonly',true),
	$('#sct_veiculacao').prop('disabled',true),
	$('#input_dta').prop('readonly',true),
	$('#input_area').prop('readonly',true),
	$('#Direcionamento_da_comunicao').prop('disabled',true),
	$('#sct_veiculacao').prop('readonly',true);
	
	if(numeroAtividadeAtual == 6  || numeroAtividadeAtual == 25  ||  numeroAtividadeAtual == 27 || numeroAtividadeAtual == 32 || numeroAtividadeAtual == 36 || numeroAtividadeAtual == 49 ){
		$('#decisao_oculto').val('2')
		
	}}
	validaFinal()

})



function validaFinal(){
	var UltimaDiv =  $('#ultimaDiv');
	var carimbo = $("<button></button>")
	var decisao = $('#decisao_oculto').val()	
    if (numeroAtividadeAtual == 4 && decisao == 1 ){
        UltimaDiv.append(carimbo)
        carimbo.text('O processo foi reprovado')
        carimbo.addClass('btn btn-danger btn-lg btn-block btn-sem_cursor')
    }


    if (numeroAtividadeAtual == 4 && decisao == 0 ){{
        UltimaDiv.append(carimbo)
        carimbo.text('O processo foi Aprovado')
        carimbo.addClass('btn btn-success btn-lg btn-block btn-sem_cursor')
    }

    return carimbo
}
}




function addHide() {
	console.log("FUNCIONANDO")
	var selecionado = $("#solicitacao").val()
	if (selecionado == "externa") {
		$("#panel-body").show();
		$('#text_titulo').text('Painel de comunicação externa')
		$("#tamanho").hide();
	} else if (selecionado == "interna") {
		$("#panel-body").show();
		$('#text_titulo').text('Painel de comunicação interna')
		$("#tamanho").show();
	
}
}
function receberValor(decisao){
	console.log(decisao)
	$('#decisao_oculto').val(decisao)
	if( decisao == 1){
		FLUIGC.toast({
			title: 'Reprovacao' ,
			message: 'Processo sera reprovado',
			type: 'danger'
			});
	}

	else if(decisao == 0 ) {
		 FLUIGC.toast({
			title: 'Aprovação' ,
			message: 'Processo sera aprovado',
			type: 'success'
			})
		}else if(decisao == 3){
			FLUIGC.toast({
				title: 'Alteração' ,
				message: 'Processo voltara para alteração',
				type: 'Warning'
				})
		}
	}




/*
function seVazio(){
	if(input_contexto = ""){
	$('#erro_contexto').show()
	}
}


$('#input_contexto').on( "blur", function() {
	alert( "Handler for `blur` called." );
  } );

*/





/*
var msg="";
if (input_contexto  == ""){
		msg += "Campo contexto não foi preenchido";
	}

if (msg !="") {
	   throw FLUIGC.toast({
	   title: 'Erro: ',
	   message: msg,
	   type: 'danger'
	   });
	   }

*/
	   /*
if(form.getValue("veiculacao")==""){
	 msg +="    Campo veiculacao não foi preenchido" ;
} 

if(form.getValue("input_dta")==""){
	msg +=" Campo data não foi preenchido";
} 

if(form.getValue("input_area")==""){
msg +=" Campo area não foi preenchido";
} 
}
*/
