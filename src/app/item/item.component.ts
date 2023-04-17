import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { ItemsService } from '../services/items.service';
import { baseURL } from '../shared/baseurl';
import { CartItem } from '../shared/cartItem';
import { Item } from '../shared/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  product!:Item;
  wholeItem!:CartItem;
  url = baseURL;
  constructor(private route: ActivatedRoute,private itemsService:ItemsService) { }
  
  onSubmit(){
    //this.wholeItem.cartitem = this.product;
    //console.log(JSON.stringify(this.wholeItem));
    this.itemsService.addCartItem(this.product).subscribe();
  }
  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => this.itemsService.getItem(params['cat'],params['id'])))
    .subscribe(product =>  this.product = product);
    console.log(this.product);
  }

}
