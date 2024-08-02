var arraysCamposIntegravel = []; 

var arraysCamposData = [];
var camposValor = '';
var arraysCamposHif = ["A2_CEP","A2_TEL"]

function servicetask28(attempt, message) {
    try{
		var cts1 = DatasetFactory.createConstraint('INTEGRA', 'S', 'S', ConstraintType.MUST);
		var dtsParam = DatasetFactory.getDataset('DTS_PARAM_CADASTRO_FORNECEDOR', null, new Array(cts1), null);

	
		if(dtsParam != null && dtsParam.values != null && dtsParam.values.length > 0){
	
		 	for (var i=0; i < dtsParam.values.length; i++){
				if(dtsParam.getValue(i,'CAMPOS').indexOf('A2_') >= 0 ){
					arraysCamposIntegravel.push(dtsParam.getValue(i,'CAMPOS'))
				}
			}
		}
		
  		var c1 = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST)
      	var dtsParamCampos = DatasetFactory.getDataset('DTS_FRM_PARAM_CAMPOS_CADASTRO_FORNECEDOR', null, new Array(c1), ['documentid;desc']);

  		if(dtsParamCampos.rowsCount > 0){

  	    	var EZ4Key = dtsParamCampos.getValue(0, 'TXT_KEY_CRIPTOGRAFADA');
  	    	var ServiceCod = dtsParamCampos.getValue(0, 'TXT_SERVICE_FLUIG');
			var data = {
				companyId : getValue("WKCompany") + "",
				serviceCode : ServiceCod  + "",
				//endpoint : "/rest/INTERFACEEZ4REST/funcao/?emp=01&filial=0101&LOGUSR=S",
				endpoint : "/rest/INTERFACEEZ4REST/funcao/?emp=01&filial=0101",
				method : "put",
				timeoutService : "100",
				params : {
					cabecalho : {},
					funcao : "",
					camposRetorno : ["A2_COD", "A2_NOME"]
				},
				headers : {
					"Content-Type": "application/json; charset=utf-8",
					"EZ4Key": EZ4Key + ""
				}
			};
			var option = hAPI.getCardValue("OPT_CADASTRO");
			
			var ADD = true;
			
			if(option == "Alterar"){
				data.params["funcao"]= "MSExecAuto({|x,y| MATA020(x,y)},aCab,4)";
			}	
			if(option == "Adicionar"){
				data.params["funcao"]= " Inclui:=.T., MSExecAuto({|x,y| MATA020(x,y)},aCab,3)";
			}
			}else if(option == "Bloquear"){
				data.params["funcao"]= "MSExecAuto({|x,y| MATA020(x,y)},aCab,4)";
				
				ADD = false;
			}
			for(var i = 0; i<arraysCamposIntegravel.length;i++ ){
				if(formatDate(arraysCamposIntegravel[i])!= ''){
					if(camposValor.indexOf(arraysCamposIntegravel[i]) >=0){
						data.params.cabecalho[arraysCamposIntegravel[i]] = toFloat(formatDate(arraysCamposIntegravel[i]))+ "";
					} else{
						data.params.cabecalho[arraysCamposIntegravel[i]] = formatDate(arraysCamposIntegravel[i])+ "";
					}
				}
				log.info('|||arraysCamposHif')
				log.dir(arraysCamposHif.indexOf(arraysCamposIntegravel[i]))
				log.dir(arraysCamposHif)
				log.info('|||campo integravel')
				log.dir(arraysCamposIntegravel[i])
				log.dir(data.params.cabecalho[arraysCamposIntegravel[i]])
				if(arraysCamposHif.indexOf(arraysCamposIntegravel[i]) >= 0 ){
					log.info('|||Valor arraysCampoHif')
					log.dir(data.params.cabecalho[arraysCamposIntegravel[i]])
					data.params.cabecalho[arraysCamposIntegravel[i]] = data.params.cabecalho[arraysCamposIntegravel[i]].replace('-','');
					log.info('|||Valor arraysCampoHif 2')
					log.dir(data.params.cabecalho[arraysCamposIntegravel[i]])
				}
			}
			log.info(">>>>>>>>>>>> data.params: " +JSON.stringify(data));
            hAPI.setCardValue('txta_envio', JSON.stringify(data));
			var clientService = fluigAPI.getAuthorizeClientService();
			var retornoApi = clientService.invoke(JSON.stringify(data));		
			var statusHttp = retornoApi.getHttpStatusResult();
			
			var errorFlag = false;
			var msg1 = 'O WebService retornou um erro:\n';
			
			//Verifica se o retorno está vazio
			if(retornoApi.getResult() == null || retornoApi.getResult().isEmpty()){
				msg1 += "Ocorreu uma falha no retorno da API!";

				errorFlag = true;
			}else {
				log.info("|||Linha 131")
				retornoApi = JSON.parse(retornoApi.getResult());
				log.dir(retornoApi)
				if(retornoApi.errorMessage != undefined && retornoApi.errorMessage != null && retornoApi.errorMessage != ''){
					var erroProthes = retornoApi.errorMessage;
				
					var altErro = erroProthes.split("Erro -->");  
					msg1 += altErro[1]; 
					errorFlag = true;

				}
			}
			//Verifica se houve erro de Http
			if(statusHttp < 200 || statusHttp > 300){
				msg1 += "\nStatus HTTP: " + statusHttp + " | Endpoint: " + data.endpoint;
				errorFlag = true;
			}
			log.info("|||error flag")
			log.dir(errorFlag)
			if(errorFlag){
				throw "ERRO_INTEGRACAO: "+msg1
			} else {
				log.info("|||Linha 121")
				log.dir(retornoApi)
				log.info("|||Linha 124")
				log.dir(hAPI.getCardValue(retornoApi.A2_COD))
				hAPI.setCardValue('ERRO_INTEGRACAO', "OK");
				hAPI.setCardValue('A2_COD', retornoApi.A2_COD);
				hAPI.setTaskComments(getValue("WKUser"), getValue("WKNumProces"), 0, "<h1 style='color:#07284b; font-size:1.5em;'>INTEGRAÇÃO EFETUADA COM SUCESSO. CÓDIGO DO FORNECEDOR: "+ retornoApi.A2_COD +"</h1>")
			//
			}
  	}catch(e){
  		//throw "ERRO NA INTEGRAÇÃO "+e.message+" / LINHA: "+e.lineNumber;
  		throw "ERRO_INTEGRACAO: "+msg1
  	}
  }

function formatDate(value){
		var campo = value
		value = hAPI.getCardValue(value)
		
		for(var i = 0;i < arraysCamposData.length;i++){
			if(arraysCamposData[i] == campo && value.indexOf('-') != -1){
				value = value.split('-')
				return value[2]+"/"+value[1]+"/"+value[0]
			}
		}
		
		return value.trim()
}
	
function toFloat(number) {
	    number = ('0' + number).match(/(\d|,|\.)/g).join('');
	    if (number.indexOf(',') >= 0) {
	        return parseFloat((number + '').replace(/\./g, '').replace(',', '.'));
	    } else {
	        return parseFloat(number);
	    }
}		
