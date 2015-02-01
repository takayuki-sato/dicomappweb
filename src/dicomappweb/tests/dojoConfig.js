/*jshint unused:false*/
var dojoConfig = {
	async: true,
	baseUrl: location.pathname.replace(/\/dicomappweb\/.*$/, '/'),
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
	deps: [ 'dicomappweb/tests/ready' ]
};
