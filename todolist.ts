import { Component, OnInit, Input } from '@angular/core';
import{BaiduService}from'../../services/baidu.service';
import { Router } from '@angular/router'; 
import { Http,Jsonp } from "@angular/http";
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(public getdata:BaiduService,
              public router:Router,
              public http:Http,
              public jsonp:Jsonp
  ) { 

  }
  // headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
  @Input() list:Array<any>;
  ngOnInit() {
    this.jsonp.get('http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK').subscribe(data=>{  
    console.log(data['_body']);
    this.list=data['_body'];
  
    },err=>{
      console.log(err);
    });

   





    this.getdata.addData(20);
    this.getdata.addData(30);
    console.log(this.getdata.list);
 
  this.list=[1,2,3,4,5];
}
goDetail(idx){
this.router.navigate(['/goodsdetail',idx]);
}
 }