/*var arraysCamposIntegravel = ["BZ_FILIAL","BZ_COD","BZ_LOCPAD","BZ_AFUNDES","BZ_ALFECRN","BZ_ALFUMAC","BZ_ALIQISS","BZ_COFINS",
"BZ_CONINI","BZ_CONVDIP","BZ_CSLL","BZ_CTRWMS","BZ_CUSTD","BZ_DATREF","BZ_DTINCLU","BZ_EMAX","BZ_EMIN","BZ_ESTSEG","BZ_FANTASM","BZ_FCIPRV","BZ_FECP","BZ_FECPBA",
"BZ_GRTRIB","BZ_HABDIF","BZ_HORFIX","BZ_IDHIST","BZ_IMPNCM","BZ_INT_ICM","BZ_IPI","BZ_IRRF","BZ_LE","BZ_LM","BZ_LOCALI2","BZ_LOCALIZ","BZ_MARKUP","BZ_MCUSTD","BZ_MOPC",
"BZ_MRP","BZ_OPC","BZ_PCOFINS","BZ_PCSLL","BZ_PE","BZ_PICM","BZ_PICMENT","BZ_PICMRET","BZ_PIS","BZ_PPIS","BZ_QB","BZ_QBP","BZ_QE","BZ_REDCOF","BZ_REDPIS","BZ_REVATU",
"BZ_TIPE","BZ_TIPOCQ","BZ_TOLER","BZ_TPHOFIX","BZ_TRIBMUN","BZ_UCALSTD","BZ_UCOM","BZ_UPRC","BZ_VLR_ICM","BZ_VLR_IPI"]

"BZ_UMDIPI","BZ_CODISS","BZ_CNAE",BZ_CLASFIS*/

var arraysCamposIntegravel = [];

var arraysCamposData = ["BZ_UCALSTD","BZ_UCOM","BZ_CONINI","BZ_DATREF","BZ_DTINCLU"]
var camposValor = '"B1_CEST","B1_PESBRU","B1_PESO","B1_CONV","BZ_CUSBN","BZ_CUSEM","BZ_CUSMP","BZ_CUSSTD2","B5_ALTURLC","B5_COMPRLC","B5_LARGLC","B1_IPI","BZ_IPI","B5_CONVDIP","B5_EMBPRCV","B5_QEEMB","B1_COMIS","B1_LM","BZ_EMIN","BZ_ESTSEG","BZ_LE","BZ_LM","BZ_CUSSTD2"';

function servicetask62(attempt, message) {
	try{

		// Consulta os campos de integração direto na tela de parametros
		var cts1 = DatasetFactory.createConstraint('INTEGRA', 'S', 'S', ConstraintType.MUST);
		var cts2 = DatasetFactory.createConstraint('CAMPOS', '_TB', '_TB', ConstraintType.MUST);
		var dtsParam = DatasetFactory.getDataset('DTS_PARAM_CADASTRO_PRODUTO', null, new Array(cts1,cts2), null);
	
		if(dtsParam != null && dtsParam.values != null && dtsParam.values.length > 0){
		 	for (var i=0; i < dtsParam.values.length; i++){
					arraysCamposIntegravel.push(dtsParam.getValue(i,'CAMPOS'))
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
		
				//Tratar envio de integração de filiais conforme preenchido no campo BZ_FILIAL
				var solicitacao = getValue("WKNumProces");
				var ctsProc = DatasetFactory.createConstraint('workflowProcessPK.processInstanceId', solicitacao, solicitacao, ConstraintType.MUST);
				var dtsProc = DatasetFactory.getDataset('workflowProcess', null, new Array(ctsProc), null);
				var docId = dtsProc.getValue(0, "cardDocumentId");

				var constraints = new Array()
				var cst = DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST);  //1
				var cst1 = DatasetFactory.createConstraint('documentid', docId, docId, ConstraintType.MUST);  //1
				var datasetRegras = DatasetFactory.getDataset('DTS_FRM_CADASTRO_DE_PRODUTO', null, new Array(cst,cst1), ['documentid;desc']); //2
				var documentId = datasetRegras.getValue(0, "metadata#id");               //4
				var documentVersion = datasetRegras.getValue(0, "metadata#version"); 
			
				constraints.push(DatasetFactory.createConstraint('tablename', 'tb_sbz', 'tb_sbz', ConstraintType.MUST));
				constraints.push(DatasetFactory.createConstraint('metadata#id', documentId, documentId, ConstraintType.MUST));
				constraints.push(DatasetFactory.createConstraint('metadata#version', documentVersion, documentVersion, ConstraintType.MUST));
				
				var datasetPaiFilho = DatasetFactory.getDataset('DTS_FRM_CADASTRO_DE_PRODUTO', null, constraints, null);

				if(datasetPaiFilho != null && datasetPaiFilho.values != null && datasetPaiFilho.values.length > 0){
					
					for (var x = 0; x < datasetPaiFilho.values.length; x++) { 
						
						var data = {
							companyId : getValue("WKCompany") + "",
							serviceCode : ServiceCod  + "",
							endpoint : "/rest/interfaceez4rest/funcao/",
							method : "put",
							timeoutService : "100",
							params : {
								cabecalho : {},
								funcao : "",
								camposRetorno : ["BZ_COD","BZ_LOCPAD"]
							},
							headers : {
								"Content-Type": "application/json",
								"EZ4Key": EZ4Key + ""
							}
						};

					//?emp=01&filial="+datasetPaiFilho.getValue(x,'BZ_FILIAL_TB'),  ENDPOINT PARA CASOS DE ENVIO PARA FILIAIS
						//Acrescentando o parâmetro funcao no objeto data de acordo com a opção do formulário
						var option = hAPI.getCardValue("OPT_CADASTRO");

						 if(option == "adicionar"){
							data.params["funcao"] = "MSExecAuto({|x,y| Mata018(x,y)},aCab,3)";
						 }else if(option == "alterar"){
							data.params["funcao"]= "MSExecAuto({|x,y| Mata018(x,y)},aCab,4)";
						}
						else if(option == "bloquear"){
							data.params["funcao"] = "MSExecAuto({|x,y| Mata018(x,y)},aCab,4)";
						}
						 
						 //data.params["funcao"] = "DBSELECTAREA('SB1'), SB1->(DBSETORDER(1)), SB1->(dbSeek(XFILIAL('SB1')+'"+datasetPaiFilho.getValue(x,'BZ_COD_TB')+"')), DBSELECTAREA('SBZ'), SBZ->(DBSETORDER(1)), NOPC:=IF( SBZ->(dbSeek(XFILIAL('SBZ')+'"+datasetPaiFilho.getValue(x,'BZ_COD_TB')+"')),4,3), MSExecAuto({|x,y| Mata018(x,y)},aCab,NOPC)";

						//Acrescentando os campos na estrutura de cabeçalho do objeto data
						for(var i = 0; i<arraysCamposIntegravel.length;i++ ){
							var valueFilho = datasetPaiFilho.getValue(x,arraysCamposIntegravel[i]);
							if(datasetPaiFilho.getValue(x,arraysCamposIntegravel[i]) != null ){ 
								if(formatDate(arraysCamposIntegravel[i],datasetPaiFilho.getValue(x,arraysCamposIntegravel[i])) != ''){
									var cpIntegra = arraysCamposIntegravel[i].split("_TB");
									if(camposValor.indexOf(cpIntegra[0]) >=0){
										data.params.cabecalho[cpIntegra[0]] = toFloat(formatDate(arraysCamposIntegravel[i],datasetPaiFilho.getValue(x,arraysCamposIntegravel[i])))+ "";
									} else{
										data.params.cabecalho[cpIntegra[0]] = formatDate(arraysCamposIntegravel[i],datasetPaiFilho.getValue(x,arraysCamposIntegravel[i]))+ "";
									}
								}
							}
						}

						var clientService = fluigAPI.getAuthorizeClientService();

						var retornoApi = clientService.invoke(JSON.stringify(data));

						var estruturaEnvio = JSONUtil.toJSON(data)
						hAPI.setCardValue('txta_envio', '');
						hAPI.setCardValue('txta_envio', estruturaEnvio);
						
						var statusHttp = retornoApi.getHttpStatusResult();
						if(statusHttp == 200 || statusHttp == '200'){
							var retorno = JSON.parse(retornoApi.getResult());
							if (retorno != undefined && retorno != null)
							{
								hAPI.setTaskComments(getValue("WKUser"), getValue("WKNumProces"), 0, "<h1 style='color:#07284b; font-size:1.5em;'>INTEGRAÇÃO SBZ EFETUADA COM SUCESSO. </h1>")
								hAPI.setCardValue('integrouSBZ', 'S');
//								hAPI.setCardValue('integrouSBZ_TB', 'S');
							}else {
								hAPI.setTaskComments(getValue("WKUser"), getValue("WKNumProces"), 0, 'ERRO_INTEGRACAO: Ocorreu uma falha no retorno da API!');
								hAPI.setCardValue('integrouSBZ', 'N');
//								hAPI.setCardValue('integrouSBZ_TB', 'N');
		//						throw "Ocorreu uma falha no retorno da API!"
							}
						} else{
							var ret = JSON.parse(retornoApi.getResult());
							hAPI.setTaskComments(getValue("WKUser"), getValue("WKNumProces"), 0, 'ERRO_INTEGRACAO: '+ret.errorMessage);
							hAPI.setCardValue('integrouSBZ', 'N');
							hAPI.setCardValue('txta_retorno', '');
							hAPI.setCardValue('txta_retorno', ret.errorMessage);
//							hAPI.setCardValue('integrouSBZ_TB', 'N');
		//					throw ret.errorMessage;
						}
					}
				}	
			}
	}catch(e){
		throw "ERRO NA INTEGRAÇÃO "+e.message+" / LINHA: "+e.lineNumber;
	}
}

function formatDate(campo,value){
	
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