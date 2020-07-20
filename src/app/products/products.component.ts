import { Component, OnChanges, OnInit, Input} from '@angular/core';
import { SharedService } from '../products/shared.service';
  import { Router } from '@angular/router'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges{

  products:any[] = []; 

innerList:boolean = false;
listShow:boolean = false;
barsCondition:boolean = true;
timesCondition:boolean = false;
rightCondition:boolean= true;
downCondition:boolean = false;


onGreater():void {
  this.innerList = !this.innerList
  this.rightCondition= !this.rightCondition
  this.downCondition = !this.downCondition
}
onDowner():void {
  this.innerList = !this.innerList
  this.rightCondition= !this.rightCondition
  this.downCondition = !this.downCondition
}
onBarsClick():void {
  this.listShow = !this.listShow;
  this.timesCondition = !this.timesCondition
  this.barsCondition = !this.barsCondition
}
onTimesClick():void {
  this.listShow = !this.listShow;
  this.timesCondition = !this.timesCondition
  this.barsCondition = !this.barsCondition
}

  @Input() filterBy?:string ='all'
  
  contactReDirect():void {
    this.router.navigate(['/contact'])
  }

  onClick(id:number){
    this.router.navigate(['/products',id]) 
  }

  constructor(private imageServices:SharedService,private router:Router) {
   this.products = this.imageServices.getProducts()
   }

  ngOnInit(): void { 
  }
  ngOnChanges():void{
    this.products = this.imageServices.getProducts();
  }


}
