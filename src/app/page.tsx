import Navbar from './components/navbar';
import Hero from './components/hero';

export default function Home() {
  return (
    <div className="bg-custom-pink relative h-screen">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/pinkbottlebg.png')", backgroundSize: '75%' }}>
      </div>

      <div className="relative z-10">
        <div className="navbar">
          <Navbar />
        </div>

        <div className="hero">
          <Hero />
        </div>
      </div>
    </div>
  );
}
