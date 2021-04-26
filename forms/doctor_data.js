
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"54DB50FE-505A-4D0B-9F59-E1E83B4DB3C3"}
 */
function onSaveData(event) {
	// TODO Auto-generated method stub
	databaseManager.saveData();
	history.back();
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"7E81E77F-5950-42FB-B8FD-EF1F93FF1F48"}
 */
function onCancel(event) {
	// TODO Auto-generated method stub
	/*var recCheck = foundset.getRecordIndex('doctor_data');
	if (recCheck) {
	application.output(recCheck);	
	
	foundset.clear();
	history.back();
	}
	else {
		application.output(recCheck);
	}
	*/

	history.back();
}
