function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	var ds = DatasetBuilder.newDataset();
	
	ds.addColumn("idcoligada");
	ds.addColumn("coligada");

	dataset.addRow(new Array("*ABCY PARTICIPAÇÕES LTDA - 09.436.201/0001-00","Matriz - Barueri"))
	dataset.addRow(new Array("*ABCY SEGUROS LTDA - 48.922.072/0001-12" , "Matriz - Barueri"))
	dataset.addRow(new Array("*CARBOLOG COSMÓPOLIS – 51.459.498/0001-96" , "Matriz- Cosmópolis"))
	dataset.addRow(new Array("*CARBOLOG LTDA - 39.830.947/0001-65" , "Matriz -Sorocaba"))
	dataset.addRow(new Array("*CARBOLOG LTDA - 39.830.947/0002-46" , "Vespasiano"))
	dataset.addRow(new Array("*CARBOLOG LTDA - 39.830.947/0003-27", "Taubaté"))
	dataset.addRow(new Array("*CARBOLOG LTDA - 39.830.947/0004-08",  "Cosmópolis"))
	dataset.addRow(new Array("*CARBOLOG LTDA - 39.830.947/0005-99", "Paulínia"))
	dataset.addRow(new Array("CARBOLOG LTDA - 39.830.947/0006-70" , "São Sebastião"))
	dataset.addRow(new Array ("*CARBOLOG LTDA - 39.830.947/0007-50", "São Vicente"))
    dataset.addRow(new Array("*CARBOLOG VESPASIANO LTDA - 39.488.901/0001-00" ,"Matriz - Vespasiano"))
	dataset.addRow(new Array("CARBOLOG VESPASIANO LTDA - 39.488.901/0002-90" , "Sorocaba"))
	dataset.addRow(new Array("*CARBOLOG VESPASIANO LTDA - 39.488.901/0003-71" , "Vitória/ES"))
	dataset.addRow(new Array("*CARBOSERVICES COSMÓPOLIS LTDA - 48.861.901/0001-02" , "Matriz - Cosmópolis"))
	dataset.addRow(new Array("*CARBOSERVICES LTDA - 39.539.733/0001-34" , "Matriz - Vespasiano"))
	dataset.addRow(new Array("*CARBOSERVICES LTDA - 39.539.733/0002-15" , "Sorocaba"))
	dataset.addRow(new Array("*CARGOZILLA LTDA - 47.238.054/0001-53"  ,"Matriz - Barueri"))
	dataset.addRow(new Array("*UNICARBO LTDA - 40.281.568/0001-42" , "Matriz Vespasiano"))
	dataset.addRow(new Array("*UNICARBO LTDA - 40.281.568/0003-04" , "Sorocaba"))
	dataset.addRow(new Array("*UNICARBO LTDA - 40.281.568/0005-76" , "Cosmópolis"))
	dataset.addRow(new Array("*UNICARBO LTDA - 40.281.568/0002-23" , "Duque de Caxias"))
	dataset.addRow(new Array("*UNICARBO LTDA - 40.281.568/0004-95" , "Juiz de Fora"))
	dataset.addRow(new Array("*UNIMETAL COSMÓPOLIS INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 10.535.766/0001-24" , "Matriz - Cosmópolis"))
	dataset.addRow(new Array("*UNIMETAL COSMÓPOLIS INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 10.535.766/0002-05" , "Taubaté"))
	dataset.addRow(new Array("*UNIMETAL INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 15.151.688/0001-20 Matriz- SorocabaUNIMETAL INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 15.181.688/0007-16" , "Vespasiano"))
	dataset.addRow(new Array("*UNIMETAL INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 15.151.688/0011-00" , "Taubaté"))
	dataset.addRow(new Array("*UNIMETAL INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 15.181.688/0015-26" , "São Vicente"))
	dataset.addRow(new Array ("*UNIMETAL INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 15.181.688/0016-07" ,  "Urussanga"))
	dataset.addRow(new Array("*UNIMETAL PARTICIPAÇÕES - 47.103.130/0001-13", "Matriz- Sorocaba"))
	dataset.addRow(new Array("*UNIMETAL REFRATARIOS LTDA - 48.902.232/0001-61" , "Matriz – Cosmópolis"))
	dataset.addRow(new Array("*UNIMETAL SÃO VICENTE INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 03.116.586/0001-42", " Matriz – São Vicente"))
	dataset.addRow(new Array("*UNIMETAL SÃO VICENTE INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 03.116.586/0002-23", "Canoas"))
	dataset.addRow(new Array("*UNIMETAL SÃO VICENTE INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 03.116.586/0003-04" , "Praia Grande"))
	dataset.addRow(new Array("*UNIQUIMICA LTDA - 48.902.125/0001-33 – Matriz" , "Cosmópolis"))
	dataset.addRow(new Array ("*UNISERVICE SERVIÇOS ADMINISTRATIVOS LTDA - 09.436.057/0001-02", "Matriz – Sorocaba"))
	dataset.addRow(new Array("*UNIVERSAL EMPREENDIMENTOS E PARTICIPAÇÕES LTDA - 46.025.557/0001-88" , "Matriz - Sorocaba"))
	dataset.addRow(new Array("*VITORIAPAR INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 08.659.198/0005-55" , "Matriz – Vespasiano"))
	dataset.addRow(new Array("*UNIMETAL USA, INC – State of Delaware" ,"EUA"))
	dataset.addRow(new Array("*UNICARBO USA, INC – State of Delaware", "EUA"))
	dataset.addRow(new Array("*UNIMETAL PARTICIPACIONES ARG S/A.  - Provincia de Buenos Aires" , "Argentina"))
	dataset.addRow(new Array("NIMETAL ROSÁRIO (ACECAR SOCIEDAD ANONIMA) - Provincia de Buenos Aires" , "Argentina"));

	

    return ds;


}function onMobileSync(user) {

}