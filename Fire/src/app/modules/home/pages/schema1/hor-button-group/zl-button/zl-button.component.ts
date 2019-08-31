import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-zl-button',
  templateUrl: './zl-button.component.html',
  styleUrls: ['./zl-button.component.scss']
})
export class ZlButtonComponent implements OnInit {
  @Input() buttonLabel: string;

  constructor() { }

  ngOnInit() {
  }

}
