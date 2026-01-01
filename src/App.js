import { useState } from 'react';
import NavBarCustom from './components/Navbar';
import Konten from './components/Konten';
import Footer from './components/Footer';

function App() {
  const [keyword, setKeyword] = useState("");
  return (
    <>
      <NavBarCustom onSearch={setKeyword}/>
      <Konten keyword={keyword}/>
      <Footer/>
    </>
  );
}

export default App;
