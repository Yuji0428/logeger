import { Routes, Route } from 'react-router-dom';

function Home() {
  return <h1 style={{ padding: 20 }}>🏁 logeger アプリへようこそ！</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
