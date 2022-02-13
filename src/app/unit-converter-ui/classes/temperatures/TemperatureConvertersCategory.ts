import { UnitConverter } from '../templates';
import { ConverterCategoryBase } from '../ConverterCategoryBase';
import { CelsiusToKelvinConverter } from './CelsiusToKelvinConverter';
import { KelvinToCelsiusConverter } from './KelvinToCelsiusConverter';

export class TemperatureConverterCategory extends ConverterCategoryBase {
  converters: UnitConverter[] = [];

  constructor(public name = 'Temperature converters') {

    super(name);
    this.converters[0] = new CelsiusToKelvinConverter('Celsius to Kelvin');
    this.converters[1] = new KelvinToCelsiusConverter('Kelvin to Celsius');
  }

  getIcon(): string {
    return 'local_pizza';
  }
}