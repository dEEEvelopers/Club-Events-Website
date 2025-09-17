
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './BaseLayout.css';
import logoImg from './assets/dEEEvelopers Image.jpg';

interface BaseLayoutProps {
  children: ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="base-layout">
      <header className="logo-header">
        <img src={logoImg} alt="dEEEvelopers Logo" className="logo-img" />
      </header>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/workshops">Workshops</Link></li>
          <li><Link to="/more">More</Link></li>
        </ul>
      </nav>
      <main className="content">
        {children}
      </main>
    </div>
  );
}
