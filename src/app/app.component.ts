import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, ComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
