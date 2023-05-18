import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../common/service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:any[] = [];
  cart:any[]=[]

  constructor(private cms: ServiceService) { }

  ngOnInit(): void {
    // this.getLoadproducts()
    this.getCartData()
  }

  getLoadproducts () {
    this.cms.getMethod('/api/v1/getproducts').subscribe((resp:any)=>{
      if(resp.status === 200 ){
        this.products = resp.data.map((row:any) => {
          let qty = 0;
          const find = this.cart.find(x=>x.product_id === row.product_id);
          if(find)
          {
            qty = find.qunatity;
          }
          return {...row,qty:qty};
        });;
      }

    })
  }
  getCartData()
  {
    this.cms.getMethod('/api/v1/getCart').subscribe((resp:any)=>{
      if(resp.status === 200 ){
        this.cms.cartData.next(resp.data);
        this.cart = resp.data
        this.getLoadproducts();
      }

    })
  }
  
  addCart(p:any)
  {
    this.cms.postMethod('/api/v1/updateCart',{
      product_id:p.product_id,
      qunatity:1
    }).subscribe((resp:any)=>{
      if(resp.status === 200){
      this.getCartData()
      }
    })
   
  }

  actionButton(p:any,action:boolean)
  {
   let  qunatity = p.qty
    if(action)
    {
      qunatity = p.qty + 1
    } else {
      qunatity = p.qty - 1
    }
    this.cms.postMethod('/api/v1/updateCart',{
      product_id:p.product_id,
      qunatity:qunatity
    }).subscribe((resp:any)=>{
      if(resp.status === 200){
      this.getCartData()
      }
    })
   
  }

}
