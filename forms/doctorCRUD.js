
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"5CEC5E69-11C1-4F99-9AF7-7FC5EAA95FB1"}
 */
function onAdd(event) {
	// TODO Auto-generated method stub
	foundset.newRecord();
	application.showForm('doctor_data');
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"21AAF61B-6F58-4BE8-8374-07336BA4A8F2"}
 */
function onDelete(event) {
	// TODO Auto-generated method stub
	var delRecFirst = foundset.getDataProviderValue('d_firstname');
	var delRecLast = foundset.getDataProviderValue('d_lastname');
	foundset.deleteRecord();
	plugins.dialogs.showErrorDialog('ENTRY REMOVED','Entry of ' + delRecFirst + ' ' + delRecLast + ' has been removed.');
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"CC596953-7A5A-4248-806B-CBD44A752B16"}
 */
function onEdit(event) {
	// TODO Auto-generated method stub
	application.showForm('doctor_data');
	
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"239C46E6-EBED-48C9-9BF1-DA36CBBB3751"}
 */
function onBack(event) {
	// TODO Auto-generated method stub
	history.back();
}
