import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from "@angular/http";
import { provideForms,disableDeprecatedForms } from "@angular/forms";
import { enableProdMode } from "@angular/core";

import { appRouteProviders } from "./app.routes";

import { AppComponent } from './app.component';


enableProdMode();
bootstrap(AppComponent,[appRouteProviders,HTTP_PROVIDERS,provideForms(),disableDeprecatedForms()]);
