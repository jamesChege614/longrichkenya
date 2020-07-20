import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title:string = "contact us";
  contactPhoto = "assets/images/contact/director.jpg";
  contactPhotoTwo = "assets/images/contact/programmer.jpg";
  phone = "0713610071";
  phoneTwo = "0713610071";


  constructor() { }

  ngOnInit(): void {
  }

}
