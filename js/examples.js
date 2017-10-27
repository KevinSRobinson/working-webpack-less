
 window.auth0 =  require('../node_modules/auth0-js/build/auth0.js');
 require('../node_modules/angular-auth0/dist/angular-auth0.js');
angular.module('examples', ['my-angular-components', 'auth0.auth0', 'ui.router']);
require('./Examples/routes.js');
require('./Examples/auth.service.js');
require('./Examples/appconfig.js');
require('./Examples/examplesEntry.js');
require('./Examples/login.controller.js');
require('./Examples/Buttons/buttonExamples.js');
require('./Examples/Layout/adminLayoutExample.js');
require('./Examples/Common/common.js');
require('./Examples/Dates/dateExamples.js');
require('./Examples/ExampleForm/exampleForm.js');
require('./Examples/ExampleForm/CreateButton/createButton.js');
require('./Examples/Firebase/firebase.js');
require('./Examples/Grid/gridExample.js');
require('./Examples/Home/home.js');
require('./Examples/Inputs/inputs.js');
require('./Examples/Layout/adminLayoutExample.js');
require('./Examples/Login/login.js');
require('./Examples/Map/mapExample.js');
require('./Examples/Modals/modals.js');
require('./Examples/Other/Spinner/spinner.js');
require('./Examples/Other/TextEditor/markdown.directive.js');
require('./Examples/Other/TextEditor/textEditor.js');
require('./Examples/TextEditor/textEditorExample.js');


require('./Examples/Panels/panels.js');
require('./Examples/SelectLists/selectListExamples.js');
require('./Examples/StatusAlerts/statusAlerts.js');
require('./Examples/Tags/tags.js');
require('./Examples/UserProfile/userProfile.js');

