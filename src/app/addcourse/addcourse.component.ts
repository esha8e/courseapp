import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  course={
  courseTitle:"",
  courseDescription:"",
  courseDate:"",
  courseVenue:"",
  courseDuration:""
  }
  
  

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }
  Addcourse(){
    // this.service.addcourse(this.course)
    // .subscribe((data)=>{
  
    // })
     alert("Success");
    
}
}
