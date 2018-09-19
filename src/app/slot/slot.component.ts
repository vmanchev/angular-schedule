import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TimeSlot } from '../models/time-slot.model';
import find from 'lodash/find';

@Component({
  selector: 'schedule-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {

  @Input() intervalStart: number;
  @Input() timeSlots: TimeSlot[];
  @Output() selectedSlot = new EventEmitter<TimeSlot>();;

  constructor() { }

  ngOnInit() {
    
  }

  getTimeSlot(intervalStart: number): TimeSlot {
    return find(
      this.timeSlots,
      (timeSlot: TimeSlot) => 
        timeSlot.getDateTime().getTime() === intervalStart
    ) || new TimeSlot(intervalStart);
  }

  selectDaySlot(intervalStart: number) {
    this.selectedSlot.emit(this.getTimeSlot(intervalStart));
  }

}