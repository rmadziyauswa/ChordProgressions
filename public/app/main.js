"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var app_routes_1 = require("./app.routes");
var app_component_1 = require('./app.component');
core_1.enableProdMode();
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [app_routes_1.appRouteProviders, http_1.HTTP_PROVIDERS, forms_1.provideForms(), forms_1.disableDeprecatedForms()]);
//# sourceMappingURL=main.js.map