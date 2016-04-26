import {Component} from 'angular2/core';
@Component({
  selector: 'deadpool-app',
  template: `<h3>{{caption}}</h3>`
})
export class DeadpoolComponent{
  private caption: string = "Hi! My name is Deadpool!";
}
