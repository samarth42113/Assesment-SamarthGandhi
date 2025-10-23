import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppCandidateList } from './app/app-candidate-list/app-candidate-list';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [AppCandidateList],
  standalone: true,
  template: `
  <app-app-candidate-list></app-app-candidate-list>`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App,{providers: [
  provideHttpClient(),
]});
