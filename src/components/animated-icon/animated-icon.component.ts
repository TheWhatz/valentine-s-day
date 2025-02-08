import { Component, Input, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-animated-icon',
  standalone: false,
  templateUrl: './animated-icon.component.html',
  styleUrl: './animated-icon.component.css',
})
export class AnimatedIconComponent implements OnInit {
  @Input()
  iconPath!: string;

  options: AnimationOptions = {
    path: this.iconPath,
    loop: true,
    autoplay: true,
  };

  ngOnInit(): void {
    this.options = {
      path: this.iconPath,
      loop: true,
      autoplay: true,
    };
  }
}
