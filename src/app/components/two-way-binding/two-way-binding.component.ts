import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  phone = '1234567'

  constructor() {
  }

  ngOnInit(): void {
  }

  changePhone(number: Event) {
    const target = number.target as HTMLInputElement
    this.phone = target.value
  }

  onPhoneClick() {
    this.phone = Math.floor(Math.random() * 10000000) + ''
  }
}
