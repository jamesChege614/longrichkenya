import { Component, OnInit } from '@angular/core';
import { SharedService } from '../products/shared.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product:any;

  constructor(private productsSerice:SharedService,private route:ActivatedRoute,private router:Router) { 
    this.product = this.productsSerice.getProduct(
      +this.route.snapshot.params['id']
    )
  }

  reDirectTo(): void {
   this.router.navigate(["/"])
  }
  contactReDirect():void {
    this.router.navigate(['/contact'])
  }


  ngOnInit(): void {
  }

}
