import NavBarCustom from './components/Navbar';
import Konten from './components/Konten';
import Footer from './components/Footer';

function App() {
  return (
    <div id="home">
      <NavBarCustom />
      <div className='my-5'></div> {/*Tambah jarak sebelum konten*/}
      <Konten />
       <div className='my-5'></div> {/*Tambah jarak sebelum footer*/}
      <Footer />
    </div>
  );
}

export default App;
