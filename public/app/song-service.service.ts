import { Injectable } from '@angular/core';
import { Http,Headers,Response } from "@angular/http";
import { Song } from './song.model';

import "rxjs/add/operator/toPromise";

@Injectable()
export class SongService {

    songs:Song[];
    songsUrl:string = "/api/songs";
    songUrl:string = "/api/song/";

    constructor(private http:Http) { }


    getAllSongs()
    {
        return this.http.get(this.songsUrl).toPromise().then(res => this.songs = res.json() as Song[]).catch(err => console.log(err));

        
    }

    getSong(id:string)
    {
        return this.http.get(this.songUrl + id).toPromise().then(res => res.json() as Song).catch(err => console.log(err));

    }


    
    deleteSong(id:string)
    {
        return this.http.delete(this.songUrl + id).toPromise().then(res => res.json() as Song).catch(err => console.log(err));

    }

}