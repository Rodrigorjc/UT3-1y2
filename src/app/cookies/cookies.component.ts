import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.css'
})
export class CookiesComponent implements OnInit {
  nombreUsuario: string | null = null;

  ngOnInit() {
    this.nombreUsuario = this.obtenerCookie("nombreUsuario");
  }
  establecerNombre(nombre: string): void {
    this.nombreUsuario = nombre;
    this.establecerCookie('nombreUsuario', nombre, 1);
  }

  establecerCookie(nombre: string, valor: string, dias: number): void {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    const expires = `expires=${fecha.toUTCString()}`;
    document.cookie = `${nombre}=${valor}; ${expires}; path=/`;
  }

  obtenerCookie(nombre: string): string | null {
    const nombreEQ = `${nombre}=`;
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.indexOf(nombreEQ) === 0) {
        return cookie.substring(nombreEQ.length, cookie.length);
      }
    }
    return null;
  }
}
