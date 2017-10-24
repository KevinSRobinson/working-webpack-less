console.log('App loaded');

require('../css/bootstrap.css');
require('../css/app.less');
angular.module('my-angular-components', []);
require('./Components/Buttons/Button/button.js');
require('./Components/Buttons/SpinnerButton/spinnerButton.js');
require('./Components/ComboBoxes/CategorySelect/categorySelect.js')

require('./Components/Filters/FilterTextbox/filterTextbox.js');
require('./Components/Headers/PageHeader/pageHeader.js');
require('./Components/Inputs/DatesField/DateField/dateField.js')
require('./Components/Inputs/DateTimeDifferenceField/dateTimeDifferenceField.js');

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