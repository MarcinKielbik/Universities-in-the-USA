import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  title = 'api';
  data: any;
  constructor(private users: UsersService) {}

  ngOnInit() {
    this.users.getPost().subscribe((result) =>{
      this.data = result;
    })
  }
}
