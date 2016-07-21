import { Component,OnInit,OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Song } from './song.model';
import { SongService } from './song-service.service';

@Component({
    moduleId: module.id,
    selector: 'view-song',
    templateUrl: 'templates/edit-song.component.html',
    styleUrls:['css/edit-song.component.css'],
    providers:[SongService]
    
})
export class EditSongComponent {
    songId:string;
    song:Song;
    sub:any;

    constructor(private route:ActivatedRoute,private songService:SongService,private router:Router)
    {

    }

    ngOnInit()
    {
        this.sub = this.route.params.subscribe(params =>{
            if(params['id'])
            {
                this.songId = params['id'];
            }
        });
    }

    ngOnDestroy()
    {
        this.sub.unsubscribe;
    }

}