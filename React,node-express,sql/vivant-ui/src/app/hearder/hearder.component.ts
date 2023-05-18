import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../common/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.scss']
})
export class HearderComponent implements OnInit {

  cartCount:number = 0;

  constructor(private cms:ServiceService,private router: Router) {
    this.cms.cartData.subscribe((res: any) => {  
      this.cartCount = 0
      res.forEach((row:any) => {
        this.cartCount += row.qunatity
      });
      // console.log("KKKKKK:",res)
    }) 
   }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
