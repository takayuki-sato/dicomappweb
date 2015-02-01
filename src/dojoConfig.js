/*jshint unused:false*/
var dojoConfig = {
	async: true,
	baseUrl: '',
	tlmSiblingOfDojo: false,
	isDebug: true,
	packages: [
		'dojo',
		'dijit',
		'dojox',
		'put-selector',
		'xstyle',
		'dgrid',
		'dicomappweb'
	],
	deps: [ 'dicomappweb' ],
	callback: function (dicomappweb) {
		dicomappweb.init();
	}
};
