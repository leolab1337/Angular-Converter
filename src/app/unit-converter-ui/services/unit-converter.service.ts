import { Injectable } from '@angular/core';

import { ConverterCategory} from '../classes/templates';
import { TemperatureConverterCategory } from '../classes/temperatures/TemperatureConvertersCategory';
import { DistanceConverterCategory } from '../classes/distances/DistanceConvertersCategory';
import { WeightConvertersCategory } from '../classes/weights/WeightConvertersCategory'

@Injectable({
  providedIn: 'root'
})
export class UnitConverterService {

  categories = [];
  constructor() {
    const temperatureconvertersCategory = new TemperatureConverterCategory();
    const distanceconvertersCategory = new DistanceConverterCategory();
    const weightconvertersCategory = new WeightConvertersCategory();
    this.categories = [temperatureconvertersCategory,
      distanceconvertersCategory,
      weightconvertersCategory];
   }



getCategories(): ConverterCategory[]{
  return this.categories;
}


}



