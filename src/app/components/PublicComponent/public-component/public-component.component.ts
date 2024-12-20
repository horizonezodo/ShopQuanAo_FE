import { Component } from '@angular/core';
import { BannerComponent } from "../../banner/banner.component";
import { CommonModule } from '@angular/common';
import { PublicServiceService } from '../../../services/PublicService/public-service.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchProduct } from '../../../models/Product/search-product';
import {FormsModule } from '@angular/forms';
@Component({
  selector: 'app-public-component',
  standalone: true,
  imports: [BannerComponent,CommonModule,HttpClientModule,FormsModule],
  templateUrl: './public-component.component.html',
  styleUrl: './public-component.component.css',
})
export class PublicComponentComponent {
  filter = false;
  searchBox = false;
  listCate?: any[];
  listProduct?: any[];
  slectedPrice: string = 'All';
  searchProduct: SearchProduct = {
    keyword: '',
    cateId: '',
    maxPrice: 0,
    minPrice: 0,
    startDate: 0,
    endDate: 0,
    viewCount: 0,
    sortBy: 'Default',
    activate: true,
    top: true,
    limit: 20,
    page: 1,
  }

  constructor(private publicService: PublicServiceService,){}

  ngOnInit(): void{
    this.getAllCate();
    this.searchProductData();
  }

  showFilter(){
    this.filter = !this.filter;
  }

  showSearchBox(){
    this.searchBox = !this.searchBox;
  }

  getAllCate():void{
    this.publicService.getAllCate().subscribe({
      next: (data) =>{
        this.listCate = data;
        // console.log(this.listCate);
      },
      error: (e) => console.error(e)
    });
  }

  searchProductData():void{
    const searchData = {
      keyword: this.searchProduct.keyword,
      cateId: this.searchProduct.cateId,
      maxPrice: this.searchProduct.maxPrice,
      minPrice: this.searchProduct.minPrice,
      startDate: this.searchProduct.startDate,
      endDate: this.searchProduct.endDate,
      viewCount: this.searchProduct.viewCount,
      sortBy: this.searchProduct.sortBy,
      activate: true,
      top: true,
      limit: 20,
      page: 1,
    }
    this.publicService.searchProduct(searchData).subscribe({
      next: (res) => {
        this.listProduct = res;
      },
      error: (e) => console.error(e)
    })
  }

  onSearchChange():void {
    this.listProduct = [];
    let minPriceData = 0;
    let maxPriceData = 0;
    if (this.slectedPrice !== "All" && !this.slectedPrice.includes('+')) {
      if (this.slectedPrice.includes('-')) {
        [minPriceData, maxPriceData] = this.slectedPrice.split("-").map(Number);
      } else {
        minPriceData = Number(this.slectedPrice.slice(0, this.slectedPrice.length - 1));
      }
    }
    const searchData = {
      keyword: this.searchProduct.keyword,
      cateId: this.searchProduct.cateId,
      maxPrice: maxPriceData,
      minPrice: minPriceData,
      startDate: this.searchProduct.startDate,
      endDate: this.searchProduct.endDate,
      viewCount: this.searchProduct.viewCount,
      sortBy: this.searchProduct.sortBy,
      activate: true,
      top: true,
      limit: 20,
      page: 1,
    }

    this.publicService.searchProduct(searchData).subscribe({
      next: (res) => {
        this.listProduct = res;
        console.log(this.listProduct);
      },
      error: (e) => console.error(e)
    })
  }

  onFilterClick(id: any): void{
    this.listProduct = [];
    let minPriceData = 0;
    let maxPriceData = 0;
    if (this.slectedPrice !== "All" && !this.slectedPrice.includes('+')) {
      if (this.slectedPrice.includes('-')) {
        [minPriceData, maxPriceData] = this.slectedPrice.split("-").map(Number);
      } else {
        minPriceData = Number(this.slectedPrice.slice(0, this.slectedPrice.length - 1));
      }
    }
    const searchData = {
      keyword: this.searchProduct.keyword,
      cateId: id,
      maxPrice: maxPriceData,
      minPrice: minPriceData,
      startDate: this.searchProduct.startDate,
      endDate: this.searchProduct.endDate,
      viewCount: this.searchProduct.viewCount,
      sortBy: this.searchProduct.sortBy,
      activate: true,
      top: true,
      limit: 20,
      page: 1,
    }
    this.publicService.searchProduct(searchData).subscribe({
      next: (res) => {
        this.listProduct = res;
        console.log(this.listProduct);
      },
      error: (e) => console.error(e)
    })
  }
}
