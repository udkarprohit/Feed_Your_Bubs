import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { catchError, find, map, Observable } from 'rxjs';
import { baseURL } from '../shared/baseurl';
import { CartItem } from '../shared/cartItem';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient ) { }

  getCartItems(): Observable<CartItem[]> { 
    return this.http.get<CartItem[]>(baseURL + 'cartItems');
  }
/*
  getTotal(): Observable<number[] | any> {
    return this.getCartItems().pipe(map(items => items.map(dish => dish.cartitem.rate)));
  }
  itemDelete(id:number): Observable<CartItem> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };
    return this.http.delete<CartItem>(baseURL + 'cartItems/' +id,httpOptions);
  }
  * DELETE: delete the hero from the server */

  itemDelete(id: number): Observable<CartItem> {
  const u = baseURL + 'cartItems';
  const url = `${u}/${id}`; // DELETE api/heroes/42
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  return this.http.delete<CartItem>(url, httpOptions).pipe();
}

  /*qty!:number;
  updateItem(cartitem:CartItem,id:number): Observable<CartItem> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
   // this.http.get<CartItem[]>(baseURL + 'cartItems').pipe(find(item => item.id === 2));
    //return this.http.put<CartItem[]>(baseURL + 'CartItem/',cartitem,httpOptions).pipe();
    //const body = cartitem;
    //  return this.http.put<CartItem>(baseURL + 'CartItem',cartitem,httpOptions).subscribe();
  }*/

}
