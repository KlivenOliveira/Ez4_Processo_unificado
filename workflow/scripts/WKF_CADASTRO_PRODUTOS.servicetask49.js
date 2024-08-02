/*var arraysCamposIntegravel = ["B5_COD","B5_CEME","B5_DIASHL","B5_REVPROD","B5_CODTRAM","B5_TPSERV","B5_DENSID",
"B5_DTDECRE","B5_EMBAGRO","B5_REGMAPA","B5_INSSPAT","B5_INTDI","B5_CONCENT",
"B5_ZF4PORC","B5_AM4PORC","B5_CODCAI","B5_AMMULTS","B5_CONCEN","B5_DESCSER",
"B5_CODTP","B5_CMPEXTR","B5_CDDMDBA","B5_SITDIEF","B5_TABINC","B5_CODGRU","B5_FORCAO","B5_MARCA","B5_SERSCD",
"B5_FCIPRV","B5_ZFMULTO","B5_ZFMULTS","B5_DIASHF","B5_VLZERO","B5_2CODBAR","B5_NATBEN","B5_DTDECAL","B5_ECBENFI",
"B5_NUMBEN","B5_ANOBEN","B5_TPESOC","B5_MARGPRE","B5_VLRCID","B5_INDCPRB",
"B5_NBS","B5_CODATIV","B5_CODSERC","B5_CDFATD","B5_CODGNRE","B5_CODFAM","B5_DEC7174","B5_CLASSE","B5_ECALTEM",
"B5_AMMULTO","B5_FORSER","B5_PRZCQ","B5_MARPEC","B5_MONTA","B5_PROJDES","B5_MARPEC","B5_IDHIST","B5_EAN145",
"B5_VERIND","B5_NRECAGR","B5_INGATV","B5_REDALIQ","B5_ISEN","B5_NUMBEAL","B5_NATALBE",
"B5_FORMMRP","B5_AGLUMRP","B5_CTRWMS","B5_PRV2","B5_PROTCON","B5_TIPO",
"B5_PRV7","B5_CODCLI","B5_VERSAO","B5_BLQINVA","B5_CODLIN","B5_DTREFP7","B5_EMB1","B5_EMB2",
"B5_QE1","B5_QE2","B5_COMPRLC","B5_CTDACON","B5_ECSUBT","B5_ISDSHIP","B5_EMPMAX","B5_ROTACAO","B5_INSPAT","B5_CERT",
"B5_SERVINT","B5_COMPR","B5_NPULMAO","B5_DES","B5_WMSEMB","B5_COMPEND","B5_ARREQTD","B5_ESPESS","B5_ESTMAT","B5_LARG",
"B5_CONVDIP","B5_SERVTDV","B5_ENDSAI","B5_SERVDEV","B5_SERVREQ","B5_ENDENT","B5_ENDREQ","B5_ENDDEV","B5_CARPER","B5_IDADEM",
"B5_LVLEMB","B5_LPSEMB","B5_PERCUB","B5_PORTMS","B5_UMDIPI","B5_ITEM","B5_CALORIA","B5_PESO","B5_TOTGOR","B5_DIASES",
"B5_PRV3","B5_PRV4","B5_PRV5","B5_MODELO","B5_ESPECIE","B5_QUALIDA","B5_EAN141","B5_PRV6","B5_DTREFP2","B5_DTREFP3",
"B5_DTREFP4","B5_DTREFP5", "B5_DTREFP6","B5_TIPUNIT","B5_LARGLC","B5_IMPETI","B5_VLDOPER","B5_VLDREQ","B5_ENDECD",
"B5_SEMENTE","B5_LEADTR","B5_FATARMA","B5_UMIND","B5_SERVENT","B5_TAKEUP","B5_TPCOMMO","B5_SERVSAI","B5_SERVEMB", 
"B5_ENDSCD","B5_ISIDUNI","B5_GSLE","B5_GSMC","B5_GSMI","B5_TPISERV","B5_ECDESCR","B5_ECENQUA","B5_ECPESOE",
"B5_ECSEQ","B5_ECLARGE","B5_ECINDIC","B5_ECLARGU","B5_ECTITU","B5_ECPCHAV","B5_ECSEQ2","B5_ECCOMP","B5_ECPROFU", 
"B5_ECCARAC","B5_ECCUBAG","B5_ECDTEX2","B5_ECDTLAN","B5_ECFLAG","B5_ECDTEX","B5_ECIMGFI","B5_ECAPRES","B5_SERECD", 
"B5_ONU","B5_TOTGORS","B5_TOTGORT","B5_COR","B5_ALTURA","B5_EAN142","B5_EAN143","B5_EAN144","B5_EAN146","B5_EAN147",
"B5_EAN148","B5_QTDVAR","B5_DTINV","B5_CODZON","B5_PENE","B5_TRATAM","B5_CLAUBA","B5_UMPRC","B5_DESTRAT","B5_CULTRA",
"B5_CTVAR","B5_CATEG"]*/

var arraysCamposIntegravel = [];
						                          
var arraysCamposData = ["B5_DTREFP7","B5_DTREFP4","B5_DTREFP5","B5_DTREFP6","B5_DTINV","B5_DTDECRE","B5_DTDECAL"]
var camposValor = '"B1_CEST","B1_PESBRU","B1_PESO","B1_CONV","BZ_CUSBN","BZ_CUSEM","BZ_CUSMP","BZ_CUSSTD2","B5_ALTURLC","B5_COMPRLC","B5_LARGLC","B1_IPI","BZ_IPI","B5_CONVDIP","B5_EMBPRCV","B5_QEEMB","B1_COMIS","B1_LM","BZ_EMIN","BZ_ESTSEG","BZ_LE","BZ_LM","BZ_CUSSTD2"';

function servicetask49(attempt, message) {
	try{
		// Consulta os campos de integração direto na tela de parametros
		var cts1 = DatasetFactory.createConstraint('INTEGRA', 'S', 'S', ConstraintType.MUST);
		var dtsParam = DatasetFactory.getDataset('DTS_PARAM_CADASTRO_PRODUTO', null, new Array(cts1), null);

	
		if(dtsParam != null && dtsParam.values != null && dtsParam.values.length > 0){
	
		 	for (var i=0; i < dtsParam.values.length; i++){
				if(dtsParam.getValue(i,'CAMPOS').indexOf('B5_')  >= 0 ){
					arraysCamposIntegravel.push(dtsParam.getValue(i,'CAMPOS'))
				}
			}
		}
		
		var c1 = DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST)
    	var dtsCadAmbiente = DatasetFactory.getDataset('DTS_FRM_PARAM_CAMPOS_CADASTRO_PRODUTO', null, new Array(c1), ['documentid;desc']);

		if(dtsCadAmbiente.rowsCount > 0){

				var id = dtsCadAmbiente.getValue(0, 'metadata#id')
				var version = dtsCadAmbiente.getValue(0, 'metadata#version')
		
				var c2 = DatasetFactory.createConstraint("metadata#id", id, id, ConstraintType.MUST)
				var c3 = DatasetFactory.createConstraint("metadata#version", version, version, ConstraintType.MUST)
				var dtCadAmbientePaiFilho = DatasetFactory.getDataset('DTS_FRM_PARAM_CAMPOS_CADASTRO_PRODUTO', null, new Array(c1, c2, c3), ['documentid;desc']);

				if(dtCadAmbientePaiFilho.rowsCount > 0){			
					var ServiceCod = dtCadAmbientePaiFilho.getValue(0, 'TXT_SERVICE_FLUIG');
					var EZ4Key = dtCadAmbientePaiFilho.getValue(0, 'TXT_KEY_CRIPTOGRAFADA');		
				
				}
		
				var data = {
					companyId : getValue("WKCompany") + "",
					serviceCode : ServiceCod  + "",
					endpoint : "/rest/interfaceez4rest/funcao",
					method : "put",
					timeoutService : "100",
					params : {
						cabecalho : {},
						funcao : "",
						camposRetorno : ["B5_COD","B5_CEME"]
					},
					headers : {
						"Content-Type": "application/json",
						"EZ4Key": EZ4Key + ""
					}
				};

				//Acrescentando o parâmetro funcao no objeto data de acordo com a opção do formulário
			var option = hAPI.getCardValue("OPT_CADASTRO");

		 	if(option == "adicionar"){
					data.params["funcao"] = "MSExecAuto({|x,y| Mata180(x,y)},aCab,3)";
			 }else if(option == "alterar"){
				data.params["funcao"]= "MSExecAuto({|x,y| Mata180(x,y)},aCab,4)";
			 }
//			  else if(option == "BLOQUEAR"){
//				data.params["funcao"] = "MSExecAuto({|x,y| Mata180(x,y)},aCab,4)";
//
//			}
			   var fazIntegracao = false
				//Acrescentando os campos na estrutura de cabeçalho do objeto data
				for(var i = 0; i<arraysCamposIntegravel.length;i++ ){
					if(arraysCamposIntegravel[i] != null){
						if(formatDate(arraysCamposIntegravel[i])!= ''){
							if(camposValor.indexOf(arraysCamposIntegravel[i]) >=0){
								data.params.cabecalho[arraysCamposIntegravel[i]] = toFloat(formatDate(arraysCamposIntegravel[i]))+ "";
							} else{
								data.params.cabecalho[arraysCamposIntegravel[i]] = formatDate(arraysCamposIntegravel[i])+ "";
							}
							fazIntegracao = true
						}
					}
				}
				
				if(fazIntegracao){
					
				var clientService = fluigAPI.getAuthorizeClientService();

				var estruturaEnvio = JSONUtil.toJSON(data)
				hAPI.setCardValue('txta_envio', '');
				hAPI.setCardValue('txta_envio', estruturaEnvio);

				var retornoApi = clientService.invoke(JSON.stringify(data));
				
				var statusHttp = retornoApi.getHttpStatusResult();
				if(statusHttp == 200 || statusHttp == '200'){
					var retorno = JSON.parse(retornoApi.getResult());
					if (retorno != undefined && retorno != null)
					{
						hAPI.setTaskComments(getValue("WKUser"), getValue("WKNumProces"), 0, "<h1 style='color:#07284b; font-size:1.5em;'>INTEGRAÇÃO SB5 EFETUADA COM SUCESSO.</h1>");
						hAPI.setCardValue('integrouSB5', 'S');
					}else {
						hAPI.setTaskComments(getValue("WKUser"), getValue("WKNumProces"), 0, 'ERRO_INTEGRACAO: Ocorreu uma falha no retorno da API!');
						hAPI.setCardValue('integrouSB5', 'N');
//						throw "Ocorreu uma falha no retorno da API!";
					}
				} else{
					var ret = JSON.parse(retornoApi.getResult());
					hAPI.setTaskComments(getValue("WKUser"), getValue("WKNumProces"), 0, 'ERRO_INTEGRACAO: '+ret.errorMessage);
					hAPI.setCardValue('integrouSB5', 'N');
					hAPI.setCardValue('txta_retorno', '');
					hAPI.setCardValue('txta_retorno', ret.errorMessage);
//					throw ret.errorMessage;
				}
			}
		}
	}catch(e){
		throw "ERRO NA INTEGRAÇÃO "+e.message+" / LINHA: "+e.lineNumber;
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