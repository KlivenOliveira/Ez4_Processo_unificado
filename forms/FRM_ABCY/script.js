
var sc_aprova = 10;
var inicio = 0
var validacao = 2
var validao_cfo =  6
var criacao_s_viagem = 22


$(document).ready(function () {    
    var decisao = $('#decisao_oculta').val()
    var UltimaDiv =  $('#encerramento');
    var carimbo = document.createElement('button')
   

    if (numeroAtividadeAtual == inicio) {
        
    }

    if (numeroAtividadeAtual == validacao) {
        ReadOnly()
        $('#decisao_oculta').val('1');
        $('#sc_aprovada').prop('disabled', false);
    }

    if (numeroAtividadeAtual == validao_cfo) {
        ReadOnly();
       
        $('#decisao_oculta').val('1');

    }

    if (numeroAtividadeAtual == criacao_s_viagem) {
        ReadOnly();
    }

    if (numeroAtividadeAtual == sc_aprova) {
        ReadOnly();
    }

    if(numeroAtividadeAtual ==2 || numeroAtividadeAtual ==6){
        $('#collapse_two').trigger('click')
        $('#collapse_tree').trigger('click')
    }

    if (numeroAtividadeAtual == 13 && decisao == 0 ){
        UltimaDiv.append(carimbo)
        carimbo.textContent = 'O processo foi reprovado'
        carimbo.classList.add("btn","btn-danger" ,"btn-lg", "btn-block","btn-sem_cursor")
      
    }

    if (numeroAtividadeAtual == 13 && decisao == 2 ){
        UltimaDiv.append(carimbo)
        carimbo.textContent = 'O processo foi Aprovado'
        carimbo.classList.add("btn","btn-success" ,"btn-lg", "btn-block", "btn-sem_cursor")
        
    }

})

  
    //if()

    
    // if(numeroAtividadeAtual >inicio ||  numeroAtividadeAtual == validacao || numeroAtividadeAtual == validao_cfo  || numeroAtividadeAtual == criacao_s_viagem){
    //     ReadOnly();
    //     $('#decisao_oculta').val('1');


    // }
    //  else if (numeroAtividadeAtual ==2){
    //     $('#sc_aprovada').prop('disabled',false)
    //  }
    // }
//});

const ReadOnly = () => {
    $('#txt_passageiro').prop('readonly',true)
    $('#txt_email').prop('readonly',true)
    $('#txt_projeto').prop('readonly',true)
    $('#txt_cpf').prop('readonly',true)
    $('#dte_nasc').prop('readonly',true)
    $('#sc_aprovada').prop('disabled',true)
}


function debugar(){
    $("#txt_passageiro").val('a'),
    $("#txt_email").val('b@.com'),
    $('#txt_projeto').val('projeto'), 
    $('#dte_nasc').val('1996-05-23'),
    $('#txt_cpf').val('000.000.000-00');
}


function receberValor(valor){
    console.log(valor)
    $("#decisao_oculta").val(valor)
    if(valor == 2) {
        $("#aprovado").addClass('btn-success');
        $("#reprovado").removeClass("btn-danger");
        $("#alterar").removeClass("btn-warning");
        FLUIGC.toast({
           title: 'Aprovação' ,
           message: 'Processo sera aprovado',
           type: 'success'
           })
        }
        if(valor == 0 ) {
            $("#reprovado").addClass('btn-danger');
            $("#aprovado").removeClass("btn-success");
            $("#alterar").removeClass("btn-warning");
            FLUIGC.toast({
               title: 'reprovação' ,
               message: 'Processo sera reprovado',
               type: 'danger'
               })
            } 
            if (valor ==3) {
                $("#alterar").addClass("btn-warning");
                $("#reprovado").removeClass('btn-danger');
                $("#aprovado").removeClass("btn-success");
              
                FLUIGC.toast({
                   title: 'Alteracao' ,
                   message: 'Processo sera alterado',
                   type: 'warning'
                   })

            }
}


