// src/App.jsx
import { HashRouter, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context/AppContext';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Volunteering from './components/sections/Volunteering';
import Certificates from './components/sections/Certificates';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Layout from './components/layout/Layout';


export default function App() {
  return (
    <HashRouter>
      <AppProvider>
        <Routes>
          <Route path='/' element={<Layout><Hero/></Layout>} />
          <Route path='/about' element={<Layout> <About /></Layout>} />
          <Route path='/projects' element={<Layout ><Projects /></Layout >} />
          <Route path='/volunteering' element={<Layout ><Volunteering /></Layout >} />
          <Route path='/certificates' element={<Layout ><Certificates /></Layout >} />
          <Route path='/skills' element={<Layout ><Skills /></Layout >} />
          <Route path='/contact' element={<Layout ><Contact /></Layout >} />
        </Routes>
      </AppProvider>
    </HashRouter>
  );
}
