import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function HomePage() {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
    </div>
  );
}
