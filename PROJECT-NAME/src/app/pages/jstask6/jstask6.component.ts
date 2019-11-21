import { Component, OnInit } from '@angular/core';

import {   FuwuService } from '../jstask5/fuwu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jstask6',
  templateUrl: './jstask6.component.html',

  styleUrls: ['./jstask6.component.scss']
  
})
export class Jstask6Component implements OnInit {

  constructor( public ser: FuwuService,public rou: Router ) { }

  ngOnInit() {
  }

  loginOut(e) {
    e.preventDefault();
    this.ser.cancel().subscribe((res: any) => {
        console.log(res)
        if (res.code == 0) {
            window.sessionStorage.removeItem("auth_token");
            this.rou.navigate(['/jstask5'])
        }
    })
}
}
