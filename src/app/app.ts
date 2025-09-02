import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';
import { NavBar } from './shared/ui/navbar'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorld, NavBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ang_proj');
}
