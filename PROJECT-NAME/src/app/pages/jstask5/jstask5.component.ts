import { Component, OnInit } from '@angular/core';
import { FuwuService } from './fuwu.service';
import { Router} from '@angular/router'
@Component({
  selector: 'app-jstask5',
  templateUrl: './jstask5.component.html',
  styleUrls: ['./jstask5.component.scss']
})
export class Jstask5Component implements OnInit {
public aaa:any = {
  name:'',
  pwd:''
}
  constructor(public ser:FuwuService,public rou:Router) { }

  ngOnInit() {
    
  }
// 页面熏染
  // login(){
  //   this.ser.postdata(this.aaa).subscribe((res:any)=>{
  //     console.log(res)
  //     if(res.code == 0){
  //       this.rou.navigate(['/jstask6'])
  //       // window.location.href = "http://localhost:4200/jstask6";
  //     }else{
  //       document.getElementById("msg").innerHTML = res.message;
  //     }
  //   })
  // }
  login() {
    this.ser.postdata(this.aaa).subscribe((res: any) => {
        console.log(res)
        if (res.code == 0) {
            window.sessionStorage.setItem('auth_token', this.aaa.name);
            this.rou.navigate(['/jstask6'])
        } else {
          document.getElementById("msg").innerHTML = res.message;
        }
    })
}


}
