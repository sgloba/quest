import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `
    <p>
      test_2
    </p>
  `,
  styles: [
  ]
})
export class Test2Component implements OnInit {
  shouldShowName: boolean = true;
  name: string = 'Jack'

  constructor() { }

  ngOnInit(): void {
  }

}
