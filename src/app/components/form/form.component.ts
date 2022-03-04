import { Component, OnInit } from '@angular/core';

type UserType = {
  name: string
  surName: string
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  get fullName() {
    return this.user.name + ' ' + this.user.surName
  }

  constructor() {
  }

  user: UserType = {
    name: 'Ilya',
    surName: 'Duginov',
  }

  phone = '12345'

  ngOnInit(): void {
    setTimeout( () => this.updatePhoneNumber(), 3000 )
  }

  updatePhoneNumber () {
    this.phone = Math.floor(Math.random() * 100000) + ''
  }

  onInit(event: Event, number: number, user: UserType) {
    const target = event.target as HTMLInputElement
    this.phone = target.value
    console.log(number)
    console.log(user)
  }

}
