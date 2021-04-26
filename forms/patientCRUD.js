/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1D4C8004-6656-4FD5-9C49-5CBEDB126A80"}
 */
var searchBox = null;

// Age will filter ages below 22.
/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E5C97316-3C48-4CDE-A76A-D726D891E429"}
 */
function onAdd(event) {
	// TODO Auto-generated method stub
	foundset.newRecord();
	application.showForm('patient_data');
	
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"716E01D2-09BD-44E9-AFFB-5E7F8A379E30"}
 */
function onEdit(event) {
	// TODO Auto-generated method stub
	
	application.showForm('patient_data');
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"BF0C8660-B9C0-470F-ABD4-CC2D573CE38E"}
 */
function onDiagnosis(event) {
	// TODO Auto-generated method stub
	var pDiag = foundset.getDataProviderValue('diagnosis');
	plugins.dialogs.showInfoDialog('DIAGNOSIS', pDiag);
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"9937888B-ADF5-4F7D-AE0A-CFD02A45C97B"}
 */
function onDelete(event) {
	// TODO Auto-generated method stub
	var delRecFirst = foundset.getDataProviderValue('first_name');
	var delRecLast = foundset.getDataProviderValue('sur_name');
	foundset.deleteRecord();
	plugins.dialogs.showErrorDialog('ENTRY REMOVED','Entry of ' + delRecFirst + ' ' + delRecLast + ' has been removed.');
	
	
	//var temp1;
	//plugins.dialogs.show('DELETE ENTRY','Are you sure you want to remove this entry?','YES' ,'NO');
	//if 
		
	

}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"ED7A8BDE-60D1-43BA-AFA0-4583CF20547A"}
 */
function onBack(event) {
	// TODO Auto-generated method stub
	history.back();
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"0AD8D2DA-7AD6-4652-BD4D-EB5D04B6B09F"}
 */
function onLoad(event) {
	// TODO Auto-generated method stub
	databaseManager.setAutoSave(false);
}


/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"04951F93-B8D0-413C-8C42-39DAEF79B525"}
 */
function onDetails(event) {
	// TODO Auto-generated method stub
	var pDet = foundset.getDataProviderValue('diagnosis');
	foundset.getDataProviderValue('address' + 'city');
	plugins.dialogs.showInfoDialog('DETAILS', pDet);
}

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"10937724-2A7D-47C3-A50D-D81069253019"}
 */

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"B99A9399-BD44-497A-8054-DA9CD1CF3FB6"}
 * @AllowToRunInFind
 */

function onSearch(event) {
		//	 load all records when search is cleared
		
		application.output(searchBox);
		if(!searchBox){
			foundset.loadAllRecords();
			return;
		}
		
		//	create search object and add search providers
		var search = scopes.svySearch.createSimpleSearch(foundset);
		
		// set the search text
		search.setSearchText(searchBox);
		
		//	list of data providers to include in search
		var searchProviders = [
			'first_name',
			'sur_name',
		
			'doctor'
			
		];
		
		// add search providers
		for(var i in searchProviders){
			search.addSearchProvider(searchProviders[i]);
		}
		
	
		
		//	execute search
		search.loadRecords(foundset);
		application.output(databaseManager.getSQL(foundset));
		application.output(databaseManager.getSQLParameters(foundset));
		

	
}