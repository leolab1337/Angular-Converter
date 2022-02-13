import { UnitConverterBase } from "../UnitConverterBase";

export class KgToPoundConverter extends UnitConverterBase {

  constructor(public name: string) {
    super(name);
  }

  getInputUnit(): string {
    return "kg";
  }

  getOutputUnit(): string {
    return "lb";
  }
  

  convert(strIn: string): string {
    let kg = parseFloat(strIn);
    let lb = kg * 2.2046 ;
    return lb.toFixed(1);
  }
}