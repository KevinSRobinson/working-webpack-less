
 window.auth0 =  require('../node_modules/auth0-js/build/auth0.js');
 require('../node_modules/angular-auth0/dist/angular-auth0.js');
angular.module('examples', ['my-angular-components', 'ui.router']);

require('./Examples/routes.js');
require('./Examples/appconfig.js');
require('./Examples/Layout/adminLayoutExample.js');
require('./Examples/ExampleForm/exampleForm.js');

''


require('./Examples/ActionLogs/Modals/actionLogsModalService.js');
require('./Examples/ActionLogs/Components/Details/details.js');
require('./Examples/ActionLogs/Components/List/actionLogsList.js');
require('./Examples/ActionLogs/Modals/ViewActionlog/viewActionLogControlller.js');
require('./Examples/ActionLogs/Services/actionLogsDataServices.js');
require('./Examples/ActionLogs/routes.js');

