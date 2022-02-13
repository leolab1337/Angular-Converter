import { UnitConverterBase } from "../UnitConverterBase";

export class CelsiusToKelvinConverter extends UnitConverterBase {
  // k = c + 273.15
  constructor(public name: string) {
    super(name);
  }

  convert(strIn: string): string {

    let c = parseFloat(strIn);
    let k = c + 273.15;
    return k.toFixed(1);
  }

  getInputUnit(): string {
    return '°C';
  }

  getOutputUnit(): string {
    return '°K';
  }

}