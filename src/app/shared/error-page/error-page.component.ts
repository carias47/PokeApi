import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles';

declare var particlesJS: any;
@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
})
export class ErrorPageComponent implements OnInit {
  public ngOnInit(): void {
    this.invokeParticles();
  }
  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () {});
  }
}
