import { UnitConverterBase } from "../UnitConverterBase";

export class KelvinToCelsiusConverter extends UnitConverterBase {
  // c = k - 273.15
  constructor(public name: string) {
    super(name);
  }

  convert(strIn: string): string {
    let k = parseFloat(strIn);
    let c = k - 273.15 ;
    return c.toFixed(1);
  }

  getInputUnit(): string {
    return '°K';
  }

  getOutputUnit(): string {
    return '°C';
  }
}