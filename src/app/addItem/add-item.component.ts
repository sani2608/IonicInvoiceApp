import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-additem-component',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {}

}
