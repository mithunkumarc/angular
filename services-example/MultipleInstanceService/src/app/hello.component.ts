import {Component} from '@angular/core';
import {HelloService} from './hello.service';
@Component({
  selector: 'hello',
  template: `<p>hello component</p>`,
  providers: [HelloService]
})
export class HelloComponent {
  constructor(hs: HelloService){
    console.log("hello comp :",hs.run());
  }
}