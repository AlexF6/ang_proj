import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { aspectsUser } from '@ng-icons/ux-aspects';

@Component({
  selector: 'app-navbar',
  imports: [NgIcon],
  templateUrl: './navbar.html',
  viewProviders: [provideIcons({ aspectsUser })]
})
export class NavBar {

}