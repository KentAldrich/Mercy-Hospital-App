/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E3C1F587-15EF-465C-99B3-776739D3A2C5"}
 */
var tempChoice ='';


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"6039B54D-B394-4B0F-8D66-C254680BAF27"}
 */
function cancel(event) {
	// TODO Auto-generated method stub
	
	databaseManager.revertEditedRecords();
	history.back();
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"FC5F8D8D-955D-4651-95AB-D83BFFB74651"}
 */
function onSaveData(event) {
	// TODO Auto-generated method stub
	databaseManager.saveData();
	history.back();
}





/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"00BC91DD-12A4-44FB-936A-CA272BEF7A79"}
 */
var departBox = null;
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"4B292B61-1ACA-4A8C-989C-156F2B422B98"}
 */
/*function onAgeCheck(event) {
	// TODO Auto-generated method stub
	
	var ageCheck = foundset.getDataProviderValue('age');
	var ageLim = 18;
	application.output(ageCheck);
	application.output(ageLim);
	application.output(tempChoice);
	var q = datasources.db.mercyhospitaldb.doctor_data.createSelect();
	q.where.conditionnames.filter()
	foundset.loadRecords(q);
	
	 if (ageCheck <= ageLim){
		application.output('Age is less than the limit.');
		
	}
	else {
		application.output('Age is more than the limit.');
				
	}
}*/
