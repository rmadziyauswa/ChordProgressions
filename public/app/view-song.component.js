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
var song_service_service_1 = require('./song-service.service');
var ViewSongComponent = (function () {
    function ViewSongComponent(route, songService, router) {
        this.route = route;
        this.songService = songService;
        this.router = router;
    }
    ViewSongComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.songId = params['id'];
                _this.songService.getSong(_this.songId).then(function (result) {
                    _this.song = result;
                });
            }
        });
    };
    ViewSongComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe;
    };
    ViewSongComponent.prototype.onDelete = function (songId) {
        var _this = this;
        this.songService.deleteSong(songId).then(function (deletedSong) { return _this.router.navigate(['/list']); }).catch(function (err) { return console.log(err); });
    };
    ViewSongComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'view-song',
            templateUrl: 'templates/view-song.component.html',
            styleUrls: ['css/view-song.component.css'],
            providers: [song_service_service_1.SongService],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, song_service_service_1.SongService, router_1.Router])
    ], ViewSongComponent);
    return ViewSongComponent;
}());
exports.ViewSongComponent = ViewSongComponent;
//# sourceMappingURL=view-song.component.js.map