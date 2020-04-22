const div = document.createElement('div');
div.innerHTML = '<custom-style><style include="lumo-color lumo-typography"></style></custom-style>';
document.head.insertBefore(div.firstElementChild, document.head.firstChild);

function addCssBlock(block) {
 const tpl = document.createElement('template');
 tpl.innerHTML = block;
 document.head.appendChild(tpl.content);
}
<<<<<<< HEAD
import $css_0 from 'Frontend/styles/MainLayout.css';
=======
<<<<<<< HEAD
import $css_0 from 'Frontend/styles/Dashboard.css';
=======
import $css_0 from 'Frontend/styles/MainLayout.css';
>>>>>>> 85a13d8d1cf97a16d8ac1a52086d871f198d021d
>>>>>>> ecf1f2ff4412d04c47074f2c58d155a258001c41
addCssBlock(`<custom-style><style>${$css_0}</style></custom-style>`);
import $css_1 from 'Frontend/styles/MainView.css';
addCssBlock(`<custom-style><style>${$css_1}</style></custom-style>`);
import $css_2 from 'Frontend/styles/MainView.css';
addCssBlock(`<custom-style><style>${$css_2}</style></custom-style>`);

import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-list/iron-list.js';
import '@vaadin/flow-frontend/comboBoxConnector-es6.js';
import '@vaadin/flow-frontend/contextMenuConnector-es6.js';
import '@vaadin/flow-frontend/datepickerConnector.js';
import '@vaadin/flow-frontend/dndConnector-es6.js';
import '@vaadin/flow-frontend/flow-component-renderer.js';
import '@vaadin/flow-frontend/gridConnector-es6.js';
import '@vaadin/flow-frontend/gridProConnector.js';
import '@vaadin/flow-frontend/ironListConnector-es6.js';
import '@vaadin/flow-frontend/ironListStyles.js';
import '@vaadin/flow-frontend/menubarConnector.js';
import '@vaadin/flow-frontend/timepickerConnector.js';
import '@vaadin/flow-frontend/vaadin-big-decimal-field.js';
import '@vaadin/flow-frontend/vaadin-grid-flow-selection-column.js';
import '@vaadin/vaadin-accordion/theme/lumo/vaadin-accordion.js';
import '@vaadin/vaadin-app-layout/theme/lumo/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/theme/lumo/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-board/vaadin-board-row.js';
import '@vaadin/vaadin-board/vaadin-board.js';
import '@vaadin/vaadin-button/theme/lumo/vaadin-button.js';
import '@vaadin/vaadin-charts/vaadin-chart.js';
import '@vaadin/vaadin-checkbox/theme/lumo/vaadin-checkbox-group.js';
import '@vaadin/vaadin-checkbox/theme/lumo/vaadin-checkbox.js';
import '@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box.js';
import '@vaadin/vaadin-confirm-dialog/theme/lumo/vaadin-confirm-dialog.js';
import '@vaadin/vaadin-context-menu/theme/lumo/vaadin-context-menu.js';
import '@vaadin/vaadin-cookie-consent/theme/lumo/vaadin-cookie-consent.js';
import '@vaadin/vaadin-crud/src/vaadin-crud-edit-column.js';
import '@vaadin/vaadin-crud/theme/lumo/vaadin-crud.js';
import '@vaadin/vaadin-custom-field/theme/lumo/vaadin-custom-field.js';
import '@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker.js';
import '@vaadin/vaadin-details/theme/lumo/vaadin-details.js';
import '@vaadin/vaadin-dialog/theme/lumo/vaadin-dialog.js';
import '@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-item.js';
import '@vaadin/vaadin-form-layout/theme/lumo/vaadin-form-layout.js';
import '@vaadin/vaadin-grid-pro/theme/lumo/vaadin-grid-pro-edit-column.js';
import '@vaadin/vaadin-grid-pro/theme/lumo/vaadin-grid-pro.js';
import '@vaadin/vaadin-grid/theme/lumo/vaadin-grid-column-group.js';
import '@vaadin/vaadin-grid/theme/lumo/vaadin-grid-column.js';
import '@vaadin/vaadin-grid/theme/lumo/vaadin-grid-sorter.js';
import '@vaadin/vaadin-grid/theme/lumo/vaadin-grid-tree-toggle.js';
import '@vaadin/vaadin-grid/theme/lumo/vaadin-grid.js';
import '@vaadin/vaadin-icons/vaadin-icons.js';
import '@vaadin/vaadin-item/theme/lumo/vaadin-item.js';
import '@vaadin/vaadin-list-box/theme/lumo/vaadin-list-box.js';
import '@vaadin/vaadin-login/theme/lumo/vaadin-login-form.js';
import '@vaadin/vaadin-login/theme/lumo/vaadin-login-overlay.js';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/icons.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-menu-bar/theme/lumo/vaadin-menu-bar.js';
import '@vaadin/vaadin-notification/theme/lumo/vaadin-notification.js';
import '@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/theme/lumo/vaadin-vertical-layout.js';
import '@vaadin/vaadin-progress-bar/theme/lumo/vaadin-progress-bar.js';
import '@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-button.js';
import '@vaadin/vaadin-radio-button/theme/lumo/vaadin-radio-group.js';
import '@vaadin/vaadin-rich-text-editor/theme/lumo/vaadin-rich-text-editor.js';
import '@vaadin/vaadin-select/theme/lumo/vaadin-select.js';
import '@vaadin/vaadin-split-layout/theme/lumo/vaadin-split-layout.js';
import '@vaadin/vaadin-tabs/theme/lumo/vaadin-tab.js';
import '@vaadin/vaadin-tabs/theme/lumo/vaadin-tabs.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-email-field.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-integer-field.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-number-field.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-password-field.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-text-area.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js';
import '@vaadin/vaadin-time-picker/theme/lumo/vaadin-time-picker.js';
import '@vaadin/vaadin-upload/src/vaadin-upload-file.js';
import '@vaadin/vaadin-upload/theme/lumo/vaadin-upload.js';
import '@vaadin/flow-frontend/comboBoxConnector.js';
import '@vaadin/flow-frontend/contextMenuConnector.js';
import '@vaadin/flow-frontend/dndConnector.js';
import '@vaadin/flow-frontend/gridConnector.js';
import '@vaadin/flow-frontend/ironListConnector.js';
import '@vaadin/flow-frontend/selectConnector.js';