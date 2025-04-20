import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn = signal<boolean>(!!localStorage.getItem('isLoggedIn'));
  private user = signal<{ email: string } | null>(null);

  login(email: string, password: string): boolean {
    // Giả lập đăng nhập thành công
    if (email && password) {
      this.loggedIn.set(true);
      this.user.set({ email });
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify({ email }));
      return true;
    }
    return false;
  }

  logout() {
    this.loggedIn.set(false);
    this.user.set(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
  }

  isLoggedIn() {
    return this.loggedIn();
  }

  getUser() {
    if (!this.user()) {
      const userStr = localStorage.getItem('user');
      if (userStr) this.user.set(JSON.parse(userStr));
    }
    return this.user();
  }
}
