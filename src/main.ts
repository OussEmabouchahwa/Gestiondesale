import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './main.server'; // Ensure this points to the correct file for your config



const bootstrap = () => bootstrapApplication(AppComponent, config);

bootstrap();
