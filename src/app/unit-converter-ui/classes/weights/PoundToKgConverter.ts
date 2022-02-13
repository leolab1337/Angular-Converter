import { UnitConverterBase } from "../UnitConverterBase";

export class PoundToKgConverter extends UnitConverterBase {

  constructor(public name: string) {
    super(name);
  }

  getInputUnit(): string {
    return "lb";
  }

  getOutputUnit(): string {
    return "kg";
  }
  

  convert(strIn: string): string {
    let lb = parseFloat(strIn);
    let kg = lb / 2.2046 ;
    return kg.toFixed(1);
  }
}