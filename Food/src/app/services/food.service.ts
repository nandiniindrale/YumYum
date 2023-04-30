import { Injectable } from '@angular/core';
import { food } from '../shared/model/food';
import { sample_foods,sample_tags } from 'src/data';
import { Tag } from '../shared/model/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getall(): food[] {
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getall().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }


  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodsByTag(tag: string): food[] {
    return tag === "All" ?
      this.getall() :
      this.getall().filter(food => food.tags?.includes(tag));
  }

  getFoodById(foodId:string):food{
    return this.getall().find(food => food.id == foodId) ?? new food();
  }
}
