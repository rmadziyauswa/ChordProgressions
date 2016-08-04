"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var search_pipe_1 = require('./search.pipe');
var song_service_service_1 = require('./song-service.service');
var SearchListComponent = (function () {
    function SearchListComponent(songService) {
        var _this = this;
        this.songService = songService;
        this.songService.getAllSongs().then(function (result) { return _this.songs = result; }).catch(function (err) { return console.log(err); });
    }
    SearchListComponent.prototype.onDelete = function (songId) {
        var _this = this;
        this.songService.deleteSong(songId).then(function (result) {
            _this.songs.forEach(function (song, index) {
                if (song._id === songId) {
                    _this.songs.splice(index, 1);
                }
            });
        }).catch(function (err) { return console.log(err); });
    };
    SearchListComponent.prototype.clearQuery = function () {
        this.query = "";
    };
    SearchListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'chord-search-list',
            templateUrl: 'templates/search-list.component.html',
            styleUrls: ['css/search-list.component.css'],
            providers: [song_service_service_1.SongService],
            directives: [router_1.ROUTER_DIRECTIVES],
            pipes: [search_pipe_1.SearchPipe]
        }), 
        __metadata('design:paramtypes', [song_service_service_1.SongService])
    ], SearchListComponent);
    return SearchListComponent;
}());
exports.SearchListComponent = SearchListComponent;
//# sourceMappingURL=search-list.component.js.map