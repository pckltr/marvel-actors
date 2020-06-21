import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
})
export class TableComponent implements OnInit {
  public persons: Person[];
  @Input() public sortType: string;

  constructor() {}

  ngOnInit(): void {
    this.persons = [
      {
        name: 'Robert Downy Jr.',
        birthdate: '04/04/1965',
      },
      {
        name: 'Chris Evans',
        birthdate: '06/13/1981',
      },
      {
        name: 'Chris Hemsworth',
        birthdate: '08/11/1983',
      },
      {
        name: 'Mark Ruffalo',
        birthdate: '11/22/1967',
      },
      {
        name: 'Chris Pratt',
        birthdate: '06/21/1979',
      },
      {
        name: 'Tom Holland',
        birthdate: '06/01/1996',
      },
      {
        name: 'Jeremy Renner',
        birthdate: '01/07/1971',
      },
      {
        name: 'Tom Hiddleston',
        birthdate: '02/09/1981',
      },
      {
        name: 'Benedict Cumberbatch',
        birthdate: '07/19/1976',
      },
      {
        name: 'Samuel L. Jackson',
        birthdate: '12/21/1948',
      },
    ];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.sortType.currentValue !== undefined) {
      this.sortPersons(changes.sortType.currentValue);
    }
  }

  sortPersons(sortBy) {
    switch (sortBy) {
      case 'name':
        this.persons.sort(this.sortByName);
        break;
      case 'age':
        this.persons.sort(this.sortByAge);
        break;
      default:
        this.persons.sort(this.sortByName);
        break;
    }
  }

  sortByName(person1: Person, person2: Person) {
    if (person1.name === person2.name) {
      return 0;
    }
    return person1.name < person2.name ? -1 : 1;
  }

  sortByAge(person1: Person, person2: Person) {
    if (new Date(person1.birthdate) === new Date(person2.birthdate)) {
      return 0;
    }
    return new Date(person1.birthdate) > new Date(person2.birthdate) ? -1 : 1;
  }
}
