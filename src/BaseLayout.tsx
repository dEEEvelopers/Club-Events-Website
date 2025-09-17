
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
        <Link to="/Club-Events-Website/">
          <img src={logoImg} alt="dEEEvelopers Logo" className="logo-img" />
        </Link>
      </header>
      <nav className="navbar">
        <ul>
          <li><Link to="/Club-Events-Website/">Home</Link></li>
          <li><Link to="/Club-Events-Website/projects">Projects</Link></li>
          <li><Link to="/Club-Events-Website/events">Events</Link></li>
          <li><Link to="/Club-Events-Website/workshops">Workshops</Link></li>
          <li><Link to="/Club-Events-Website/more">More</Link></li>
        </ul>
      </nav>
      <main className="content">
        {children}
      </main>
    </div>
  );
}
