import { Component } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';

@Component({
  selector: 'app-love',
  imports: [ComponentsModule],
  templateUrl: './love.component.html',
  styleUrl: './love.component.css',
})
export class LoveComponent {
  loveIcon = '/love.json';
  heartIcon = '/heart.json';
}
