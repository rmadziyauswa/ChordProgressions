"use strict";
var router_1 = require("@angular/router");
var search_list_component_1 = require("./search-list.component");
var view_song_component_1 = require("./view-song.component");
var edit_song_component_1 = require("./edit-song.component");
var routeConf = [
    {
        path: "",
        redirectTo: "/list",
        pathMatch: "full"
    },
    {
        path: "list",
        component: search_list_component_1.SearchListComponent
    },
    {
        path: "song/:id",
        component: view_song_component_1.ViewSongComponent
    },
    {
        path: "edit/:id",
        component: edit_song_component_1.EditSongComponent
    },
    {
        path: "edit",
        component: edit_song_component_1.EditSongComponent
    }
];
exports.appRouteProviders = [
    router_1.provideRouter(routeConf)
];
//# sourceMappingURL=app.routes.js.map