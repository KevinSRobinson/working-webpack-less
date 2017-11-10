require('../css/bootstrap.css');
require('../css/app.less');
require('../css/core.less');
require('../css/fonts.less');
require('../css/forms.less');
require('../css/alerts.less');
require('../css/menu.less');
require('../css/sidebar.less');
require('../css/aceeditor.less');

require('../css/fonts/glyphicons-halflings-regular.eot');
require('../css/fonts/glyphicons-halflings-regular.svg');
require('../css/fonts/glyphicons-halflings-regular.ttf');
require('../css/fonts/glyphicons-halflings-regular.woff');
require('../css/fonts/glyphicons-halflings-regular.woff2');

angular.module('my-angular-components', [ 'ngAnimate',
'ngSanitize',
'angularUtils.directives.dirPagination',
//angular ui
'ui.ace',
'ui.bootstrap',
'ui.select',
'ngFabForm',
'ui.grid']);

require('./Components/cssClassService.js');

require('./Components/Buttons/Button/button.js');
require('./Components/Buttons/SpinnerButton/spinnerButton.js');
require('./Components/ComboBoxes/CategorySelect/categorySelect.js')

require('./Components/Filters/FilterTextbox/filterTextbox.js');
require('./Components/Headers/PageHeader/pageHeader.js');
require('./Components/Inputs/DatesField/DateField/dateField.js')
require('./Components/Inputs/DateTimeDifferenceField/dateTimeDifferenceField.js');

require('./Components/Inputs/InputField/inputField.js');
require('./Components/Inputs/SelectField/selectField.js');
require('./Components/Inputs/TextEditor/textEditor.js');
require('./Components/Inputs/TextEditor/markdown.directive.js');

require('./Components/Layout/AdminLayout/AdminLayoutCore/adminLayout.js');
require('./Components/Layout/AdminLayout/Header/AlertsDropDown/alertsDropDownMenu.js');
require('./Components/Layout/AdminLayout/Header/HeaderBar/headerBar.js');
require('./Components/Layout/AdminLayout/Header/UserOptionsDropDown/userOptionsDropDownMenu.js');
require('./Components/Layout/AdminLayout/SideMenu/SideMenu/sideMenu.js');
require('./Components/Layout/AdminLayout/SideMenu/SideMenuFooter/sideMenuFooter.js');
require('./Components/Layout/AdminLayout/SideMenu/SideMenuItems/sideMenuItems.js');

require('./Components/Modals/ModalButtons/modalButtons.js');
require('./Components/Modals/ModalHeader/modalHeader.js');

require('./Components/Panels/InfoPanel/infoPanel.js');
require('./Components/Panels/MoreLessButton/moreLessButton.js');
require('./Components/Panels/MoreLessPanel/moreLessPanel.js');
require('./Components/Panels/Panel/panel.js');
require('./Components/StatusAlerts/StatusAlert/statusAlert.js');