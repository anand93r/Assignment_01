import { Component, OnInit } from '@angular/core';
import { ProductModel } from './specs.model';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.css']
})
export class SpecsComponent implements OnInit {

  title: String = "Car List";
  products: ProductModel[] | any;
  imageWidth: number = 100;
  imageMargin: number = 5;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = JSON.parse(JSON.stringify(data));
    })
  }

}

