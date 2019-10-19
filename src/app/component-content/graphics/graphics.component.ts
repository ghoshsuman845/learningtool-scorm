import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/services/layout.service';
import { Graphics } from 'src/app/models/components/graphics.model';
import { HttpClient, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {
  name: any;
  reader: FileReader;
  get graphics() :   Graphics[] {
    return this.layoutService.graphics;
  
  }
 
  public message: string;
  text1: string ;


  constructor( private layoutService: LayoutService) { }
  uploadImage($event) {
    
    
    this.reader = new FileReader();
    this.name = $event.target.files[0].name;
    this.reader.addEventListener("load", function () {
        if (this.result && localStorage) {
          console.log( typeof this.result);
          
            localStorage.setItem('name', JSON.stringify(this.result));
        } else {
            alert();
        }
    });
    this.reader.readAsDataURL($event.target.files[0]);
}

  ngOnInit() {
  }
 
    


  SubmitItem(graphicsCompForm:HTMLInputElement) {
    console.log(graphicsCompForm.value)
    this.layoutService.addGraphics(graphicsCompForm.value);
   console.log(JSON.stringify(graphicsCompForm.value));
   localStorage.setItem("GraphicsComponentItem",JSON.stringify(graphicsCompForm.value));
  }

}
