import { Component,Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: any;

  constructor(private activatedRoute: ActivatedRoute)  { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.userId = params['userId']);
    
  }

}
