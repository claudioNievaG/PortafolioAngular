import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
constructor(){}

@HostListener('window:scroll', ['$event'])
onWindowScroll() {
  const header = document.querySelector('header') as HTMLElement;;
  const headerHeight = header?.offsetHeight;
  const scrolledPastHeader = window.scrollY > headerHeight;

  if (scrolledPastHeader) {
    console.clear();
    console.log('window.scrollY', window.scrollY);
    console.log('headerHeight', headerHeight);

  }else{
    console.clear();
    console.log('window.scrollY', window.scrollY);
    console.log('headerHeight', headerHeight);
  }
}

ngOnInit(): void {

}
}
