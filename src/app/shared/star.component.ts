

import {Component, OnChanges, Input} from '@angular/core';

@Component({

    selector:'star-comp',
    templateUrl: './star.component.html',
    //'<div class="crop"><div style="width:86px"> <span class="glyphicon glyphicon-star"><span class="glyphicon glyphicon-star"></span> <span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span></div>    </div>',
    styleUrls:['/star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;
    dummy:any;


    ngOnChanges():void{
        this.starWidth=this.rating*86/5;

    }

}