import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimatedIconComponent } from './animated-icon/animated-icon.component';
import { LottieComponent } from 'ngx-lottie';

@NgModule({
  declarations: [AnimatedIconComponent],
  imports: [CommonModule, LottieComponent],
  exports: [AnimatedIconComponent],
})
export class ComponentsModule {}
