import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseurl';
import { CartItem } from '../shared/cartItem';
import { Item } from '../shared/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http : HttpClient) { }
/*
  getItemByCat(cat:number): Observable<Item[]> {
    let category: String;
    switch(cat){ 
      case 1: 
          category = "CAKES";
      break;   
      case 2: 
            category = "BREADS";
      break;   
 
      default: 
           category = "CAKES";
      break;   
      }
      //const u = baseURL + 'cartItems';
      const url = `${category}`; 
    return this.http.get<Item[]>(baseURL + url);
  }
*/
  
/*
  getBreads(): Observable<Item[]> { //Items
    return this.http.get<Item[]>(baseURL + 'BREADS');
  }*/
getItem(cat:String,id: number): Observable<Item> {
    return this.http.get<Item>(baseURL + cat +'/' + id);
  }
  
  getCatItems(cat: String): Observable<Item[]> {
    return this.http.get<Item[]>(baseURL + cat);
  }

  addCartItem(cartitem: Item): Observable<CartItem> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<CartItem>(baseURL + 'cartitems',{
        "qty":1,
        cartitem
    },httpOptions);
  }

}
