import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Playbar from '../components/Playbar';

export default function HomePage() {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <Playbar />
    </div>
  );
}
