export default class TimeMoment {
  unit: string;
  multiplier: number;
  before: TimeMoment | null;

  private beforeUnits: string[] = [];

  constructor(unit: string, multiplier: number, before: TimeMoment | null) {
    this.unit = unit;
    this.multiplier = multiplier;
    this.before = before;

    let _before = before;

    while (_before) {
      this.beforeUnits.push(_before.unit);
      _before = _before.before;
    }
  }

  to(from: number, timeMoment: TimeMoment): number {
    if (timeMoment.unit === this.unit) return from;
    else if (this.beforeUnits.includes(timeMoment.unit)) {
      let multiplier = this.multiplier;

      let before = this.before;
      let shouldStop = before?.unit === timeMoment.unit;

      while (before?.before && !shouldStop) {
        multiplier = multiplier * before.multiplier;
        shouldStop = before.before.unit === timeMoment.unit;
        before = before.before;
      }

      return from * multiplier;
    } else return from * (1 / timeMoment.to(1, this));
  }
}
