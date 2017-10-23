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




