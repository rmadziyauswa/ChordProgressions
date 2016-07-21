import { Component,OnInit,OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
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
    _progression:string;
    keys:string[];

    constructor(private route:ActivatedRoute,private songService:SongService,private router:Router)
    {

    }

    ngOnInit()
    {
        this.keys = this.songService.getAllKeys();
        this.song = new Song("0","","",[]);

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


    onSubmit(songForm:any)
    {
        console.log(songForm);
        if(this.songId)
        {
            //its an edit
            console.log("Edit??");

        }else{
            //its a new song
            
            this.song.progression = this._progression.split(",");

            this.songService.addSong(this.song).then(res=> this.router.navigate(['/list'])).catch(err=>console.log(err));

        }
    }

}