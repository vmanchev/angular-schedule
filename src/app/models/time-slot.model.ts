export class TimeSlot {
  startTime: Date;
  endTime: Date;
  sector: string;
  description?: string;

  constructor(
    startTime: Date | string | number,
    endTime: Date | string | number,
    sector: string,
    description?: string
  ) {
    this.startTime = !(startTime instanceof Date)
      ? new Date(startTime)
      : startTime;
    this.startTime.setSeconds(0);
    this.startTime.setMilliseconds(0);

    this.endTime = !(endTime instanceof Date) ? new Date(endTime) : endTime;
    this.endTime.setSeconds(0);
    this.endTime.setMilliseconds(0);

    this.sector = sector;
    this.description = description;
  }
}
