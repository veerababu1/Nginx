import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  @Input()
  items: any;
  SelectedValue: any;
  @Output()
  onValueChange: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.items = [{text: 'Please Select' , value: '0'}]
  }
    ValueChange() {
    this.onValueChange.emit(this.SelectedValue);
    console.log(this.SelectedValue);
  }
  ngOnInit() { }
}
