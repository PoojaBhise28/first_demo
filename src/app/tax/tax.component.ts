import { Component } from '@angular/core';
import { TaxService } from './tax.service';
import { ResponseModel } from '../Responsemodel';
import { CommonModule, NumberSymbol } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tax',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tax.component.html',
  styleUrl: './tax.component.css'
})
export class TaxComponent {

  constructor(private taxService : TaxService, private route : ActivatedRoute){}

  id : number = 0;

  ngOnInit() : void {
    this.id = Number(this.route.snapshot.params['id'])
    console.log(this.id)
    if(!Number.isNaN(this.id)){
      this.fetchDataById(this.id);
    
    }
    
  }

  result? : ResponseModel;

  name? : string;
  async  fetchData() {
    this.result = await this.taxService.GetTaxAsync() 
    console.log(this.result);
  }
  
  async fetchDataById(id : number) {
     this.result = await this.taxService.GetTaxByIdAsync(this.id);
    this.name = this.result.data.stateName;
    console.log("name =>",this.name)
    console.log(this.result)
  }
  
}
 

