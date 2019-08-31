import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-height-button',
  templateUrl: './height-button.component.html',
  styleUrls: ['./height-button.component.scss']
})
export class HeightButtonComponent implements OnInit {
  @Input() buttonLabel: string;

  constructor() { }

  ngOnInit() {
  }

}
