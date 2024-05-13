import { Component } from '@angular/core';
import { TaxService } from './tax.service';
import { ResponseModel } from '../Responsemodel';
import { CommonModule, NumberSymbol } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TaxModel } from './TaxModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tax',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tax.component.html',
  styleUrl: './tax.component.css'
})
export class TaxComponent {

  initialTaxData: TaxModel = {
    id: 0,
    
    stateName: '',
    sgst: 0,
    cgst: 0,
    totalTax: ''
  }

  taxInfo?: TaxModel;

  constructor(private taxService: TaxService, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.initialTaxData.id = Number(this.route.snapshot.params['id'])
    console.log(this.initialTaxData.id)
    if (0 !== this.initialTaxData.id && !Number.isNaN(this.initialTaxData.id)) {
      this.fetchDataById(this.initialTaxData.id);
    }

  }

  result?: ResponseModel;

  name?: string;
  async fetchData() {
    this.result = await this.taxService.GetTaxAsync()
     console.log(this.result);
    this.taxInfo = this.result.data;
    console.log(this.taxInfo)
  }

  async fetchDataById(id: number) {
    this.result = await this.taxService.GetTaxByIdAsync(id);
    this.name = this.result.data.stateName;
    this.taxInfo = this.result.data;
    // console.log(this.taxInfo)
    this.initialTaxData = this.result.data;
    console.log(this.initialTaxData)
    // console.log("name =>",this.name)
    // console.log(this.result)
  }

  res?: ResponseModel

  async handleSubmit() {
    console.log(this.initialTaxData.id)
    if(!this.initialTaxData.id ){
      console.log("Add")
      this.taxService
      .CreateTaxAsync(this.initialTaxData);
    }else{
      console.log("Update")
      this.taxService
      .UpdateTaxAsync(this.initialTaxData);
    }
    console.log(this.result);
  }

}


