import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { messages } from '../../constant/messages';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, ComponentsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  label!: string;
  homeIcon = 'home.json';
  messageIndex!: number;
  count: number = 2;

  ngOnInit(): void {
    this.messageIndex = 0;
    this.label = messages[this.messageIndex];
  }

  onNoButtonClick(): void {
    let yesButton = document.getElementById('yes-text');
    yesButton?.classList.remove('text-[' + this.count * 16 + 'px]');

    this.count++;
    let size = Math.pow(this.count, 4);
    if (yesButton) {
      yesButton.style.fontSize = `${size}px`;
    }

    let maxIndex = messages.length;
    this.messageIndex = this.messageIndex + 1;
    if (this.messageIndex >= maxIndex) {
      this.messageIndex = 1;
    }
    this.label = messages[this.messageIndex];
  }
}
