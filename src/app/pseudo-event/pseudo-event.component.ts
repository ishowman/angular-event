import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'pseudo-event',
  templateUrl: './pseudo-event.component.html',
  styleUrls: ['./pseudo-event.component.css']
})
export class PseudoEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  copy(event) {
    console.log('copy hotkey', event)
  }

  ctrlZ(event) {
    console.log('pressing ctrl + Z')
  }

  @HostListener('document:keyup.control.z') undo(event: KeyboardEvent) {
    // document对象绑定keyup事件
    console.log('ctrl + z from document')
  }

}
