function afterProcessCreate(processId) {

	var cEmpresa = '01'
	var cFilial = '0101'
	var constraints = new Array();

	constraints.push(DatasetFactory.createConstraint("empresa", cEmpresa, "", ConstraintType.MUST));
	constraints.push(DatasetFactory.createConstraint("filial", cFilial, "", ConstraintType.MUST));
	var dataset = DatasetFactory.getDataset("DTS_FUNCAO_REST_REG", null, constraints, null);

}

function strzero(val) {
	return ("00" + val).substr(-2);
}