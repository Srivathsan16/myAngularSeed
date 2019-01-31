import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/observable';
import { IProduct } from './products';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';

import {Http, Response} from '@angular/http';


@Injectable()
export class ProductService{
private _productUrl = "http://localhost:5678/start";

    constructor(private http:Http){}


        getProduct():Observable<IProduct[]>{
            console.log('Coming here :;; Sri');
            return this.http.get(this._productUrl)
            .map((response:Response) => <IProduct[]> response.json())
            .catch(this.handleError);   
    }
        private handleError(error:Response){
            return Observable.throw(error.json().error||"Server Errror")
    }
}