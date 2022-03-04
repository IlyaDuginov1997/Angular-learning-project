import { Component, OnInit } from '@angular/core';

type UserType = {
  id: number
  name: string
  template: string
}

@Component({
  selector: 'app-structure-directives',
  templateUrl: './structure-directives.component.html',
  styleUrls: ['./structure-directives.component.css']
})
export class StructureDirectivesComponent {
  toggleFlag = true
  deepObject: any = null

  users: UserType[] = [
    {id: 0, name: 'Nikita', template: 'bold'},
    {id: 1, name: 'Dima', template: 'italic'},
    {id: 2, name: 'Artem', template: 'unknown'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  generateUser() {
    this.deepObject = {
      user: {
        name: 'John',
        surName: 'Doe'
      }
    }
  }

  deleteUser() {
    this.deepObject = null
  }

  changeToggleFlag() {
    this.toggleFlag = !this.toggleFlag
  }

  trackBy(index: number, user: UserType) {
    return user.id
  }
}
