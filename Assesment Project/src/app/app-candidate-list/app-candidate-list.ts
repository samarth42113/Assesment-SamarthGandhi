import { Component, OnInit } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClient } from '@angular/common/http';
import { Common } from '../common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  standalone: true,
  selector: 'app-app-candidate-list',
  imports: [FormsModule, CommonModule, NgSelectModule, NgxPaginationModule ],
  templateUrl: './app-candidate-list.html',
  styleUrl: './app-candidate-list.css',
})
export class AppCandidateList {
  searchValue = '';
  results: any;
  p: number = 1; 
  tableSize: number[] = [10, 15, 20];
  itemsPerPage: number = 10;
  selectedfilter1: any = null;
  selectedfilter2: any = null;
  filter1data: any = [];
  filter2data: any = [];
  public placeholderdata = 'enter the details';
  public searchdata = '';
  Countries: any = [];
  States: any = [];
  Cities: any = [];
  selectedCountry: any;
  selectedState: any;
  selectedCity: any;
  constructor(private service: Common) {}

  ngOnInit() {
    this.getdata();
    this.getfilterData();
    this.getCountries();
  }

  getfilterData() {
    this.service.getprimaryfilterdata().subscribe((res: any) => {
      this.filter1data = res;
      console.log(res);      
    });
  }
  getdata() {
    this.service.getuserdata(this.searchValue, this.selectedfilter1, this.selectedfilter2, this.selectedCountry, this.selectedState, this.selectedCity).subscribe((res: any) => {
      this.results = res;
    });
  }

  OnFilterSelect() {
    this.filter2data = [];
    this.selectedfilter2 = null;
    console.log(this.selectedfilter2)
    if(this.selectedfilter1!=null || this.selectedfilter1!=''){
      this.getdata();
      this.service.getscondaryfilterdata(this.selectedfilter1).subscribe((res: any) => {
        this.filter2data = res;
      });
    }
  }
  getState(){
    this.getdata();
    this.selectedState = null;
    this.States = [];
    this.selectedCity = null;
    this.Cities = [];
    if(this.selectedCountry != null && this.selectedCountry!=''){
      this.service.getStates(this.selectedCountry).subscribe((res:any)=>{
        console.log(res.data.states);
        this.States = res.data.states;
      })
    }
  }
  getCity(){
    this.getdata();
    this.selectedCity = null;
    this.Cities = [];
    if(this.selectedState != null && this.selectedState!=''){
      this.service.getCity(this.selectedCountry, this.selectedState).subscribe((res:any)=>{
        this.Cities = res.data;
      })
    }
    
  }
  getCountries(){
    this.service.getCountries().subscribe((res:any)=>{
      console.log(res.data);
      this.Countries = res.data;
    })
  }

  onTableSizeChange(event: any): void {
    this.itemsPerPage = event.target.value;
    this.p = 1; // Reset to the first page when the user changes the number of items per page
  }
}
