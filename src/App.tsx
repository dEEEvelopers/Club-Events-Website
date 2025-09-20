
import { Routes, Route } from 'react-router-dom';
import BaseLayout from './BaseLayout';
import Home from './pages/Home';

function BlankPage({ title }: { title: string }) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>{title}</h2>
      <p>This page is under construction.</p>
    </div>
  );
}

function App() {
  return (
    <BaseLayout>
      <Routes>
        <Route path="/Club-Events-Website/" element={<Home title="Home" />} />
        <Route path="/Club-Events-Website/projects" element={<BlankPage title="Projects" />} />
        <Route path="/Club-Events-Website/events" element={<BlankPage title="Events" />} />
        <Route path="/Club-Events-Website/workshops" element={<BlankPage title="Workshops" />} />
        <Route path="/Club-Events-Website/more" element={<BlankPage title="More" />} />
      </Routes>
    </BaseLayout>
  );
}

export default App;
