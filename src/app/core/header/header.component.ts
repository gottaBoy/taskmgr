import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {
  }

  openSidebar(){
    this.toggle.emit();
  }

  onChange(checked:boolean){
    console.log("onChange==>"+ checked);
    this.toggleDarkTheme.emit(checked);
  }

}
