/*var arraysCamposIntegravel = ["B1_COD","B1_DESC","B1_TIPO","B1_UM","B1_LOCPAD","B1_GRUPO","B1_TE","B1_TS","B1_SEGUM","B1_CONV","B1_TIPCONV","B1_ALTER","B1_PRV1","B1_CUSTD","B1_UCALSTD","B1_UPRC","B1_MCUSTD","B1_UCOM","B1_PESO","B1_CONTA","B1_CC","B1_ITEMCC","B1_FAMILIA","B1_QB",
"B1_PROC","B1_LOJPROC","B1_APROPRI","B1_FANTASM","B1_RASTRO","B1_UREV","B1_DATREF","B1_FORAEST","B1_ESPECIE","B1_COMIS","B1_PERINV","B1_DTREFP1","B1_CONINI","B1_CODBAR","B1_FORMLOT","B1_LOCALIZ","B1_IMPORT","B1_SOLICIT","B1_AGREGCU","B1_GRUPCOM","B1_REVATU","B1_QTDSER","B1_CLVL","B1_CPOTENC","B1_POTENCI","B1_USAFEFO","B1_CODGTIN","B1_AFAMAD","B1_PICM","B1_IPI","B1_POSIPI","B1_EX_NCM","B1_EX_NBM","B1_ALIQISS","B1_CODISS","B1_PICMRET",
"B1_PICMENT","B1_IMPZFRC","B1_ORIGEM","B1_CLASFIS","B1_GRTRIB","B1_CONTSOC","B1_IRRF","B1_INSS","B1_REDINSS","B1_REDIRRF","B1_TABIPI","B1_REDPIS","B1_REDCOF","B1_PCSLL","B1_PCOFINS","B1_PPIS","B1_VLR_IPI","B1_INT_ICM","B1_VLR_ICM","B1_PIS","B1_VLR_PIS","B1_FECP","B1_CLASSE","B1_AFABOV","B1_RETOPER","B1_CNAE","B1_COFINS","B1_CSLL","B1_VLR_COF","B1_PRFDSUL","B1_CRDEST","B1_TRIBMUN","B1_RICM65","B1_AFETHAB","B1_REGRISS","B1_PRN944I","B1_CRDPRES",
"B1_AFACS","B1_ALFECRN","B1_QE","B1_EMIN","B1_ESTSEG","B1_ESTFOR","B1_FORPRZ","B1_PE","B1_TIPE","B1_LE","B1_LM","B1_TOLER","B1_TIPODEC","B1_MRP","B1_PRVALID","B1_QUADPRO","B1_EMAX","B1_NOTAMIN","B1_TIPOCQ","B1_NUMCQPR","B1_BITMAP","B1_SERIE","B1_ADMIN","B1_PERGART","B1_GARANT","B1_FABRIC","B1_DESPIMP","B1_BASE3","B1_DESBSE3","B1_DATASUB","B1_MTBF","B1_MTTR","B1_ATIVO","B1_PESBRU","B1_TIPCAR",
"B1_FRACPER","B1_LOTVEN","B1_TNATREC","B1_AFASEMT","B1_AIMAMT","B1_TERUM","B1_AFUNDES","B1_GCCUSTO","B1_CCCUSTO","B1_PARCEI","B1_VALEPRE","B1_CODQAD","B1_PMACNUT","B1_PMICNUT","B1_CODPROC","B1_TIPOBN","B1_VLCIF","B1_MOPC","B1_ESCRIPI","B1_CRICMS","B1_FUSTF","B1_HREXPO","B1_VM_PROC","B1_GRPNATR","B1_DTFIMNT","B1_DTCORTE","B1_MARKUP","B1_VEREAN","B1_VIGENC","B1_CEST","B1_GRPCST","B1_GRPTIDC","B1_TPPROD",
"B1_TPREG","B1_CHASSI","B1_DIFCNAE","B1_FETHAB","B1_PR43080","B1_CODANT","B1_SELOEN","B1_DESBSE2","B1_BASE2","B1_IVAAJU","B1_ALFECST","B1_CFEMA","B1_FECPBA","B1_ALFECOP","B1_MSEXP","B1_PAFMD5","B1_RPRODEP","B1_ALFUMAC","B1_PRINCMG","B1_GRPTI","B1_MEPLES","B1_REGESIM","B1_RSATIVO","B1_TFETHAB","B1_TPDP","B1_CRICMST","B1_FECOP","B1_AJUDIF","B1_CFEM","B1_CFEMS","B1_PRDORI","B1_SITTRIB","B1_IMPNCM","B1_MSBLQL"]; 
*/

var arraysCamposIntegravel = []; 

var arraysCamposData = [ "B1_UCALSTD","B1_UCOM","B1_UREV","B1_DATREF","B1_DTREFP1","B1_CONINI","B1_DATASUB","B1_DTFIMNT","B1_DTCORTE","B1_VIGENC"]
var camposValor = '"B1_CEST","B1_PESBRU","B1_PESO","B1_CONV","BZ_CUSBN","BZ_CUSEM","BZ_CUSMP","BZ_CUSSTD2","B5_ALTURLC","B5_COMPRLC","B5_LARGLC","B1_IPI","BZ_IPI","B5_CONVDIP","B5_EMBPRCV","B5_QEEMB","B1_COMIS","B1_LM","BZ_EMIN","BZ_ESTSEG","BZ_LE","BZ_LM","BZ_CUSSTD2"';

  function servicetask11(attempt, message) {
  	try{
  		// Consulta os campos de integração direto na tela de parametros
		var cts1 = DatasetFactory.createConstraint('INTEGRA', 'S', 'S', ConstraintType.MUST);
		var dtsParam = DatasetFactory.getDataset('DTS_PARAM_CADASTRO_PRODUTO', null, new Array(cts1), null);

	
		if(dtsParam != null && dtsParam.values != null && dtsParam.values.length > 0){
	
		 	for (var i=0; i < dtsParam.values.length; i++){
				if(dtsParam.getValue(i,'CAMPOS').indexOf('B1_') >= 0 ){
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
  						camposRetorno : ["B1_COD","B1_DESC","B1_MSBLQL"]
  					},
  					headers : {
  						"Content-Type": "application/json",
  						"EZ4Key": EZ4Key + ""
  					}
  				};

  				//Acrescentando o parâmetro funcao no objeto data de acordo com a opção do formulário
 				var option = hAPI.getCardValue("OPT_CADASTRO");

				 if(option == "adicionar"){  					
					data.params["funcao"] = "MSExecAuto({|x,y| Mata010(x,y)},aCab,3)";
 				 }else if(option == "alterar"){
 					data.params["funcao"]= "MSExecAuto({|x,y| Mata010(x,y)},aCab,4)";

 				}
// 				else if(option == "BLOQUEAR"){
// 					data.params["funcao"] = "MSExecAuto({|x,y| Mata010(x,y)},aCab,4)";
//
//				}

				 for(var i = 0; i<arraysCamposIntegravel.length;i++ ){
					if(arraysCamposIntegravel[i] != null){
						if(formatDate(arraysCamposIntegravel[i])!= ''){
							if(camposValor.indexOf(arraysCamposIntegravel[i]) >=0){
								data.params.cabecalho[arraysCamposIntegravel[i]] = toFloat(formatDate(arraysCamposIntegravel[i]))+ "";
							} else{
								data.params.cabecalho[arraysCamposIntegravel[i]] = formatDate(arraysCamposIntegravel[i])+ "";
							}
						}
					}
  				}
  				
                
  				var clientService = fluigAPI.getAuthorizeClientService();

				var estruturaEnvio = JSONUtil.toJSON(data)
				hAPI.setCardValue('txta_envio', estruturaEnvio);

  				var retornoApi = clientService.invoke(JSON.stringify(data)); 		
  				
  				var statusHttp = retornoApi.getHttpStatusResult();

				if(statusHttp == 200 || statusHttp == '200'){
					var retorno = JSON.parse(retornoApi.getResult());
					if (retorno != undefined && retorno != null)
					{
						hAPI.setTaskComments(getValue("WKUser"), getValue("WKNumProces"), 0, "<h1 style='color:#07284b; font-size:1.5em;'>INTEGRAÇÃO SB1 EFETUADA COM SUCESSO. </h1>")
						hAPI.setCardValue('integrouSB1', 'S');
					}else {
						hAPI.setTaskComments(getValue("WKUser"), getValue("WKNumProces"), 0, 'ERRO_INTEGRACAO: Ocorreu uma falha no retorno da API!');
						hAPI.setCardValue('integrouSB1', 'N');
//						throw "Ocorreu uma falha no retorno da API!";
					}
				} else{
					var ret = JSON.parse(retornoApi.getResult());
					hAPI.setTaskComments(getValue("WKUser"), getValue("WKNumProces"), 0, 'ERRO_INTEGRACAO: '+ret.errorMessage);
					hAPI.setCardValue('integrouSB1', 'N');
					hAPI.setCardValue('txta_retorno', ret.errorMessage);
//					throw ret.errorMessage;
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