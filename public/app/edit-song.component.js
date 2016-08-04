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
var song_model_1 = require('./song.model');
var song_service_service_1 = require('./song-service.service');
var EditSongComponent = (function () {
    function EditSongComponent(route, songService, router) {
        this.route = route;
        this.songService = songService;
        this.router = router;
    }
    EditSongComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.keys = this.songService.getAllKeys();
        this.song = new song_model_1.Song("0", "", "", [], new Date());
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.songId = params['id'];
                _this.songService.getSong(_this.songId).then(function (song) {
                    _this.song = song;
                    _this._progression = song.progression.toString();
                }).catch(function (err) { return console.log(err); });
            }
        });
    };
    EditSongComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe;
    };
    EditSongComponent.prototype.onSubmit = function (songForm) {
        var _this = this;
        this.song.progression = this._progression.split(",");
        if (this.songId) {
            //its an edit
            this.songService.editSong(this.song).then(function (res) { return _this.router.navigate(['/list']); }).catch(function (err) { return console.log(err); });
        }
        else {
            //its a new song       
            this.songService.addSong(this.song).then(function (res) { return _this.router.navigate(['/song', res._id]); }).catch(function (err) { return console.log(err); });
        }
    };
    EditSongComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'view-song',
            templateUrl: 'templates/edit-song.component.html',
            styleUrls: ['css/edit-song.component.css'],
            providers: [song_service_service_1.SongService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, song_service_service_1.SongService, router_1.Router])
    ], EditSongComponent);
    return EditSongComponent;
}());
exports.EditSongComponent = EditSongComponent;
//# sourceMappingURL=edit-song.component.js.map