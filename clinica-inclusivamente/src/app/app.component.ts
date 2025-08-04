import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Clínica Inclusivamente';
  activeSection: string = 'inicio';
  
  setActiveSection(section: string): void {
    this.activeSection = section;
    // Rolagem suave para o topo quando mudar de seção
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
