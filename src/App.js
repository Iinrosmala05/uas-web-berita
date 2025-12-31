import NavBarCustom from './Navbar';
import Konten from './Konten';
import Footer from './Footer';

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
