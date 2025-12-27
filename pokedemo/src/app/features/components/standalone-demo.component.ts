import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-standalone-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="demo-container">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <button (click)="incrementCounter()">Click me ({{ counter }})</button>
    </div>
  `,
  styles: [`
    .demo-container {
      padding: 20px;
      border: 2px solid #d7b1ff;
      border-radius: 12px;
      margin: 10px 0;
    }
    h2 {
      color: #a265ff;
    }
    button {
      background: #d7b1ff;
      border: none;
      padding: 10px 18px;
      border-radius: 10px;
      cursor: pointer;
      font-weight: 600;
      color: #fff;
    }
  `]
})
export class StandaloneDemoComponent {
  title = 'Composant Standalone Demo';
  description = 'Exemple de composant standalone créé pour les tests Jest';
  counter = 0;

  incrementCounter(): void {
    this.counter++;
  }
}
