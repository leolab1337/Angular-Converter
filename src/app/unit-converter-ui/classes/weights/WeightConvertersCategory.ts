import { ConverterCategoryBase } from '../ConverterCategoryBase';
import { KgToPoundConverter} from './KgToPoundConverter';
import { PoundToKgConverter } from './PoundToKgConverter';

export class WeightConvertersCategory extends ConverterCategoryBase {
    constructor(public name = 'Weight converters') {

        super(name);
        this.converters[0] = new KgToPoundConverter('Kg to Pound');
        this.converters[1] = new PoundToKgConverter('Pound to Kg');
    }
    getIcon(): string {
        return 'fitness_center';
      }
}