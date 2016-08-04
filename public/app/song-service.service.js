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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var SongService = (function () {
    function SongService(http) {
        this.http = http;
        this.songsUrl = "/api/songs";
        this.songUrl = "/api/song/";
        this.keys = ["A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab"];
    }
    SongService.prototype.getAllKeys = function () {
        return this.keys;
    };
    SongService.prototype.getAllSongs = function () {
        var _this = this;
        return this.http.get(this.songsUrl).toPromise().then(function (res) { return _this.songs = res.json(); }).catch(function (err) { return console.log(err); });
    };
    SongService.prototype.getSong = function (id) {
        return this.http.get(this.songUrl + id).toPromise().then(function (res) { return res.json(); }).catch(function (err) { return console.log(err); });
    };
    SongService.prototype.deleteSong = function (id) {
        return this.http.delete(this.songUrl + id).toPromise().then(function (res) { return res.json(); }).catch(function (err) { return console.log(err); });
    };
    SongService.prototype.addSong = function (song) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(this.songUrl, JSON.stringify(song), { headers: headers }).toPromise().then(function (result) { return result.json(); }).catch(function (err) { return console.log(err); });
    };
    SongService.prototype.editSong = function (song) {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return this.http.post(this.songUrl + song._id, JSON.stringify(song), { headers: headers }).toPromise().then(function (result) { return result.json(); }).catch(function (err) { return console.log(err); });
    };
    SongService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SongService);
    return SongService;
}());
exports.SongService = SongService;
//# sourceMappingURL=song-service.service.js.map