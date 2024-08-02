function defineStructure() {

}
function onSync(lastSyncDate) {

}
function createDataset(fields, constraints, sortFields) {
	
	var dataset = DatasetBuilder.newDataset();
	
	dataset.addColumn("Unidade");
	dataset.addColumn("Razao");
	dataset.addColumn("Localidade");
	dataset.addColumn("concat");
	
	 
	 
	dataset.addRow(new Array("01","ABCY PARTICIPAÇÕES LTDA - 09.436.201/0001-00" ,"Matriz - Barueri", "01-ABCY PARTICIPAÇÕES LTDA - 09.436.201/0001-00 Matriz - Barueri"));
	dataset.addRow(new Array("02" , "ABCY SEGUROS LTDA - 48.922.072/0001-12" , "Matriz - Barueri", "02-ABCY SEGUROS LTDA - 48.922.072/0001-12 Matriz - Barueri"  ));
	dataset.addRow(new Array("03" ,"CARBOLOG COSMÓPOLIS – 51.459.498/0001-96" , "Matriz- Cosmópolis" , "03-CARBOLOG COSMÓPOLIS – 51.459.498/0001-96 Matriz - Cosmópolis"));
	dataset.addRow(new Array("04" ,"CARBOLOG LTDA - 39.830.947/0001-65" , "Matriz -Sorocaba" , "04-CARBOLOG LTDA - 39.830.947/0001-65 , Matriz -Sorocaba" ));
	dataset.addRow(new Array("05" ,"CARBOLOG LTDA - 39.830.947/0002-46" , "Vespasiano", "05-CARBOLOG LTDA - 39.830.947/0002-46 - Vespasiano"));
	dataset.addRow(new Array("06", "CARBOLOG LTDA - 39.830.947/0003-27", "Taubaté", "06 - CARBOLOG LTDA - 39.830.947/0003-27, - Taubaté"));
	dataset.addRow(new Array("07","CARBOLOG LTDA - 39.830.947/0004-08",  "Cosmópolis" , "07 - CARBOLOG LTDA - 39.830.947/0004-08 - Cosmópolis"));
	dataset.addRow(new Array("08" ,"CARBOLOG LTDA - 39.830.947/0005-99", "Paulínia" , "08 - CARBOLOG LTDA - 39.830.947/0005-99 Paulínia"));
	dataset.addRow(new Array("09", "CARBOLOG LTDA - 39.830.947/0006-70" , "São Sebastião", "09 - CARBOLOG LTDA - 39.830.947/0006-70  São Sebastião"));
	dataset.addRow(new Array ("10","CARBOLOG LTDA - 39.830.947/0007-50", "São Vicente" , "10 - CARBOLOG LTDA - 39.830.947/0007-50  São Vicente"));
    dataset.addRow(new Array("11", "CARBOLOG VESPASIANO LTDA - 39.488.901/0001-00" ,"Matriz" , " 11 - Vespasiano,CARBOLOG VESPASIANO LTDA - 39.488.901/0001-00 Matriz - Vespasiano"));
	dataset.addRow(new Array("12","CARBOLOG VESPASIANO LTDA - 39.488.901/0002-90" , "Sorocaba", "12 - CARBOLOG VESPASIANO LTDA - 39.488.901/0002-90 Sorocaba" ));
	dataset.addRow(new Array("13", "CARBOLOG VESPASIANO LTDA - 39.488.901/0003-71" , "Vitória/ES" , "13 - CARBOLOG VESPASIANO LTDA - 39.488.901/0003-71 - Vitória/ES" ));
	dataset.addRow(new Array("14","CARBOSERVICES COSMÓPOLIS LTDA - 48.861.901/0001-02" , "Matriz - Cosmópolis" ,"14 - CARBOSERVICES COSMÓPOLIS LTDA - 48.861.901/0001-02  Matriz - Cosmópolis"));
	dataset.addRow(new Array("15" , "CARBOSERVICES LTDA - 39.539.733/0001-34" , "Matriz - Vespasiano" , "15 - CARBOSERVICES LTDA - 39.539.733/0001-34  Matriz - Vespasiano"));
	dataset.addRow(new Array("16", "CARBOSERVICES LTDA - 39.539.733/0002-15" , "Sorocaba","16 - CARBOSERVICES LTDA - 39.539.733/0002-15 Sorocaba" ));
	dataset.addRow(new Array("17","CARGOZILLA LTDA - 47.238.054/0001-53"  ,"Matriz - Barueri","17 - CARGOZILLA LTDA - 47.238.054/0001-53  , Matriz - Barueri"));
	dataset.addRow(new Array("18","UNICARBO LTDA - 40.281.568/0001-42" , "Matriz Vespasiano","18 - UNICARBO LTDA - 40.281.568/0001-42  Matriz Vespasiano"));
	dataset.addRow(new Array("19","UNICARBO LTDA - 40.281.568/0003-04" , "Sorocaba"  ,  "19 - UNICARBO LTDA - 40.281.568/0003-04 Sorocaba"));
	dataset.addRow(new Array("20","UNICARBO LTDA - 40.281.568/0005-76" , "Cosmópolis","20 - UNICARBO LTDA - 40.281.568/0005-76 Cosmópolis"));
	dataset.addRow(new Array("21","UNICARBO LTDA - 40.281.568/0002-23" , "Duque de Caxias","21 - UNICARBO LTDA - 40.281.568/0002-23-Duque de Caxias"));
	dataset.addRow(new Array("22","UNICARBO LTDA - 40.281.568/0004-95" , "Juiz de Fora", "22 - UNICARBO LTDA - 40.281.568/0004-95 - Juiz de Fora"));
	dataset.addRow(new Array("23","UNIMETAL COSMÓPOLIS INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 10.535.766/0001-24" , "Matriz - Cosmópolis" , "23 - UNIMETAL COSMÓPOLIS INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 10.535.766/0001-24  Matriz - Cosmópolis"));
	dataset.addRow(new Array("24","UNIMETAL COSMÓPOLIS INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 10.535.766/0002-05" , "Taubaté", "UNIMETAL COSMÓPOLIS INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 10.535.766/0002-05 Taubaté" ));
	dataset.addRow(new Array("25", "UNIMETAL INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 15.151.688/0001-20" , "Matriz-Sorocaba", "24 - UNIMETAL INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 15.181.688/0007-16" , "Vespasiano","UNIMETAL INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 15.151.688/0001-20 Matriz- SorocabaUNIMETAL INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 15.181.688/0007-16 - Vespasiano" ));
	dataset.addRow(new Array("26","UNIMETAL INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 15.151.688/0011-00" , "Taubaté", "25 - UNIMETAL INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 15.151.688/0011-00 Taubaté"));
	dataset.addRow(new Array("27","UNIMETAL INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 15.181.688/0015-26" , "São Vicente" ,"26 - UNIMETAL INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 15.181.688/0015-26 - São Vicente" ));
	dataset.addRow(new Array ("28","UNIMETAL INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 15.181.688/0016-07" , "Urussanga", "27 - UNIMETAL INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 15.181.688/0016-07 - Urussanga"));
	dataset.addRow(new Array("29","UNIMETAL PARTICIPAÇÕES - 47.103.130/0001-13" , "Matriz- Sorocaba","28 - UNIMETAL PARTICIPAÇÕES - 47.103.130/0001-13 Matriz- Sorocaba"));
	dataset.addRow(new Array("30","UNIMETAL REFRATARIOS LTDA - 48.902.232/0001-61" , "Matriz – Cosmópolis", "29 - UNIMETAL REFRATARIOS LTDA - 48.902.232/0001-61  Matriz – Cosmópolis"));
	dataset.addRow(new Array("31","UNIMETAL SÃO VICENTE INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 03.116.586/0001-42", " Matriz – São Vicente" , "30 - UNIMETAL SÃO VICENTE INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 03.116.586/0001-42 Matriz – São Vicente"));
	dataset.addRow(new Array("32","UNIMETAL SÃO VICENTE INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 03.116.586/0002-23", "Canoas","31 - UNIMETAL SÃO VICENTE INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 03.116.586/0002-23  Canoas"));
	dataset.addRow(new Array("33","UNIMETAL SÃO VICENTE INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 03.116.586/0003-04" , "Praia Grande","32 - ","UNIMETAL SÃO VICENTE INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 03.116.586/0003-04- Praia Grande"));
	dataset.addRow(new Array("34","UNIQUIMICA LTDA - 48.902.125/0001-33 – Matriz" , "Cosmópolis", "33 UNIQUIMICA LTDA - 48.902.125/0001-33 – Matriz - Cosmópolis" ));
	dataset.addRow(new Array ("35","UNISERVICE SERVIÇOS ADMINISTRATIVOS LTDA - 09.436.057/0001-02" , "Matriz – Sorocaba", "35 - UNISERVICE SERVIÇOS ADMINISTRATIVOS LTDA - 09.436.057/0001-02 Matriz – Sorocaba"));
	dataset.addRow(new Array("36","UNIVERSAL EMPREENDIMENTOS E PARTICIPAÇÕES LTDA - 46.025.557/0001-88" , "Matriz - Sorocaba","36 - UNIVERSAL EMPREENDIMENTOS E PARTICIPAÇÕES LTDA - 46.025.557/0001-88" , "Matriz - Sorocaba"));
	dataset.addRow(new Array("37","VITORIAPAR INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 08.659.198/0005-55" , "Matriz – Vespasiano","37 - VITORIAPAR INDÚSTRIA, COMÉRCIO E EMPREENDIMENTOS LTDA - 08.659.198/0005-55 Matriz – Vespasiano"));
	dataset.addRow(new Array("38","UNIMETAL USA, INC – State of Delaware" ,"EUA" , "38 - UNIMETAL USA, INC – State of Delaware EUA"));
	dataset.addRow(new Array("39","UNICARBO USA, INC – State of Delaware", "EUA", "39 - UNICABO USA, INC – State of Delaware EUA"  ));
	dataset.addRow(new Array("40","UNIMETAL PARTICIPACIONES ARG S/A.  - Provincia de Buenos Aires" , "Argentina" , "40-UNIMETAL PARTICIPACIONES ARG S/A.  - Provincia de Buenos Aires - Argentina"));
	dataset.addRow(new Array("41","NIMETAL ROSÁRIO (ACECAR SOCIEDAD ANONIMA) - Provincia de Buenos Aires" , "Argentina", "41 UNIMETAL ROSÁRIO (ACECAR SOCIEDAD ANONIMA) - Provincia de Buenos Aires Argentina"));


		return dataset;
}

function onMobileSync(user) {

}