import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pico-preview',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pico-preview.component.html',
  styleUrl: './pico-preview.component.css',
})
export class PicoPreviewComponent {}
