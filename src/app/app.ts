import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorld } from './hello-world/hello-world';
import { NavBar } from './shared/ui/navbar'
import { CarouselComponent } from "./layout/carousel";
import { MovieItem } from "./layout/carousel";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelloWorld, NavBar, CarouselComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    movies: MovieItem[] = [
    { title: 'Breaking Bad', imageSrc: 'assets/bcs.jpg', synopsis: 'Profesor de química se convierte en fabricante de metanfetamina.' },
    { title: 'Dark', imageSrc: 'assets/dark.jpg', synopsis: 'Un misterio temporal en un pueblo alemán.' },
    { title: 'Stranger Things', imageSrc: 'assets/st.jpg', synopsis: 'Niños enfrentan fuerzas sobrenaturales en los 80s.' },
    { title: 'The Witcher', imageSrc: 'assets/witcher.jpg', synopsis: 'Geralt de Rivia caza monstruos por monedas.' },
    { title: 'Narcos', imageSrc: 'assets/narcos.jpg', synopsis: 'La crónica de los carteles en Colombia.' },
    { title: 'Mindhunter', imageSrc: 'assets/mindhunter.jpg', synopsis: 'El origen del perfil criminal del FBI.' },
    { title: 'One Piece', imageSrc: 'assets/onepiece.jpg', synopsis: 'Piratas, aventuras y un sueño imposible.' },
  ];
  protected readonly title = signal('ang_proj');
}
