import { Component, OnInit } from '@angular/core';
import {  Item } from '../shared/item';
import { ItemsService } from '../services/items.service';
import { baseURL } from '../shared/baseurl';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  products!: Item[]; //this holds all the items based on category
  url = baseURL;
  selectedCat!: String;//CAKES
  constructor(private itemsService:ItemsService,private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.route.params.pipe(switchMap((params: Params) =>{
      this.selectedCat = String(params['cat']);
      return this.itemsService.getCatItems(params['cat'])//CAKES
     }
     )).subscribe(product =>  this.products = product);
    
  }
 

}
