import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap-ngif',
  templateUrl: './baitap-ngif.component.html',
  styleUrls: ['./baitap-ngif.component.scss']
})
export class BaitapNgifComponent implements OnInit {
  public nameLogin: string = "";
  public isLogin:boolean = true;

  constructor() { }

  ngOnInit() {
    let user = JSON.parse(localStorage.getItem("user"));
    if(user != null){
      this.nameLogin = user.name;
      this.isLogin = false;
    }
  }

  login(name, pass){
    if(name === "cybersoft" && pass === "cybersoft"){
      this.nameLogin = name;
      this.isLogin = false;
      let objUser = {
        name: name,
        pass: pass
      }

      localStorage.setItem("user", JSON.stringify(objUser));
    }
  }

  logout(){
    this.isLogin = true;
  }

}
