import { Component, OnInit } from '@angular/core';

import {checkMail} from '../../utils/email.utils';
import {PostI, PostService} from "../../services/post.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(
    private postService: PostService
  ) {}

  text: string = ''
  post: PostI | undefined = {} as PostI;

  get getStyle() {
    if (+this.text % 2 === 0 && !isNaN(+this.text)) {
      return { color: 'blue' }
    }
    if (+this.text % 2 !== 0 && !isNaN(+this.text)) {
      return { color: 'red' };
    }
    return {};
  }

  get isTextEmail(): boolean {
    return checkMail(this.text);
  }

  printPosts() {
    this.postService.getPosts().subscribe((data) => {
      this.post = data.find((post) => post.title === this.text);
    });
  }

  ngOnInit(): void {
  }

}


