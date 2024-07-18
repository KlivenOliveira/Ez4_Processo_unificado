//calendario//
var input_contexto = $('#input_contexto').val() 



$(document).ready(function () {
//$(".panel-body").hide()
//	$("#aprovado").hide()
//	$("#reprovado").hide()
if(numeroAtividadeAtual >0){
	$('#input_contexto').prop('readonly',true),
	$('#input_tamanho').prop('readonly',true),
	$('#input_tamanho').prop('readonly',true),
	$('#sct_veiculacao').prop('disabled',true),
	$('#input_dta').prop('readonly',true),
	$('#input_area').prop('readonly',true),
	$('#Direcionamento_da_comunicao').prop('disabled',true),
	$('#sct_veiculacao').prop('readonly',true);
}
})



function addHide() {
	console.log("FUNCIONANDO")
	var selecionado = $("#solicitacao").val()
	if (selecionado == "externa") {
		$("#panel-body").show();
		$("#tamanho").hide();
	} else if (selecionado == "interna") {
		$("#panel-body").show();
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
