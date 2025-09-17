
import { Routes, Route } from 'react-router-dom';
import BaseLayout from './BaseLayout';

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
        <Route path="/" element={<BlankPage title="Home" />} />
        <Route path="/projects" element={<BlankPage title="Projects" />} />
        <Route path="/events" element={<BlankPage title="Events" />} />
        <Route path="/workshops" element={<BlankPage title="Workshops" />} />
        <Route path="/more" element={<BlankPage title="More" />} />
      </Routes>
    </BaseLayout>
  );
}

export default App;
