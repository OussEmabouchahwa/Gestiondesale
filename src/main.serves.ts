
import { routes } from './app/app.routes'; // Ensure this path is correct
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';


export const config = {
  providers: [
    provideRouter(routes),
    BrowserAnimationsModule,
    provideHttpClient()
  ]
};

export const bootstrap = () => bootstrapApplication(AppComponent, config);

bootstrap();
