import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from "@angular/http";

import { appRouteProviders } from "./app.routes";

import { AppComponent } from './app.component';

bootstrap(AppComponent,[appRouteProviders,HTTP_PROVIDERS]);
