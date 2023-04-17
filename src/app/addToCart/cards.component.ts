
import { Component, OnInit } from '@angular/core';
import { CartItem } from '../shared/cartItem';
import { CartService } from '../services/cart.service';
import { baseURL } from '../shared/baseurl';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private cartService: CartService,private router: Router ) { }
  

  cart_Items!: CartItem[];

  item_total!: number;

  total!: number;
 // total!: number;
  //qty:number=1;

  url = baseURL;
 
  /*inCrement(c:CartItem,qty1: number): void{
    qty1 = qty1 + 1;
    c.qty = qty1;
   // console.log(JSON.stringify(c));
    
   this.cartService.updateItem(c,c.id).subscribe();
  }
  deCrement(cart_Items:CartItem,qty: number){
    qty = qty - 1;
   // this.cartService.updateItem(cart,qty).subscribe();
  }
  gettotal(){
    var total = 0;
    this.cart_Items.forEach((item)=>{
     // var n = Number();
       total = total + item.cartitem.rate;
    })
    this.total = total;
    console.log(total);
  }*/
  getTotal():String{
    var l=0;
    this.cart_Items.forEach((i)=>{l += i.cartitem.rate});
    //l.toFixed(2);
     return l.toFixed(2);
  }

  itemDelete(id:number){
    this.cartService.itemDelete(id).subscribe(()=>{
      this.getItems();
    });
  }

  getItems(){
    this.cartService.getCartItems().subscribe(cart_Items => this.cart_Items = cart_Items);
  }
  
  ngOnInit(): void {
    this.getItems();
    //var total = 0;
    
    //this.item_total = total;
  //  console.log(JSON.stringify(this.cart_Items));
    this.getTotal();
    //this.cartService.getTotal().subscribe(total => this.total = total);
   
    /*
      
   $(document).ready(function(){
     update_amounts();
     $('.qty, .price').on('keyup keypress blur change', function() {
         update_amounts();
     });
 });
 
 function update_amounts(){
     let sum:number = 0.0;
     $('#myTable > tbody  > tr').each(function() {
         let qty:number = $(this).find('.qty').val();
         let price:number = $(this).find('.price').val();
         let amount:number = (qty*price)
         sum+=amount;
         $(this).find('.amount').text(''+amount);
     });
     $('.total').text(sum);
 }

 //----------------for quantity-increment-or-decrement-------
var incrementQty;
var decrementQty;
var plusBtn  = $(".cart-qty-plus");
var minusBtn = $(".cart-qty-minus");
incrementQty = plusBtn.click(function() {
   var $n = $(this)
   .parent(".button-container")
   .find(".qty");
   $n.val(Number($n.val())+1 );
   update_amounts();
});
decrementQty = minusBtn.click(function() {
   var $n = $(this)
   .parent(".button-container")
   .find(".qty");
   var QtyVal = Number($n.val());
   if (QtyVal > 0) {
       $n.val(QtyVal-1);
   }
   update_amounts();
});*/

  }
  
}
