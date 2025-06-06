import { Component } from '@angular/core';
import { NavbarComponent } from '../components/common/navbar/navbar.component';
import { BodyComponent } from '../components/body/body.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, BodyComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'dev-pull';
}
