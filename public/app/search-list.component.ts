import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES,Route } from '@angular/router';
import { Song } from './song.model';
import { SongService } from './song-service.service';

@Component({
    moduleId: module.id,
    selector: 'chord-search-list',
    templateUrl: 'templates/search-list.component.html',
    styleUrls:['css/search-list.component.css'],
    providers:[SongService],
    directives:[ROUTER_DIRECTIVES]
})
export class SearchListComponent {
    songs:Song[];

    constructor(songService:SongService)
    {
        songService.getAllSongs().then(result => this.songs = result).catch(err => console.log(err));

    }
    
}