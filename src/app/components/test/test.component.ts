import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  text:any = 'Type smth..'
  mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  checkType() {
    if(this.text%2 === 0 && !isNaN(this.text)) {
      //even
      return {color: 'blue'}
    }
    if(this.text%2 !== 0 && !isNaN(this.text)) {
      //odd
      return {color: 'red'}
    }
    if(this.text.match(this.mailRegex)) {
      //mail
      return {
        color: 'orange',
        fontWeight: 'bold',
        textShadow: '1px 1px 2px black'
      }
    }
  return {color: 'black'}
  }

  ngOnInit(): void {
    // this.checkType('12@213.com')
  }

}


