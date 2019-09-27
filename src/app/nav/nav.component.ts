import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  INTERVIEW_HOSTS = [
    'Lawrence Lessig',
    'Joe Rogan',
    'Ben Shapiro',
    'H3H3',
    'Kara Swisher'
  ];

  constructor() { }

  ngOnInit() {
  }

  direct_to_official() {
    /*
      Direct user to the official website when the logo is clicked
    */
    
  }
}
