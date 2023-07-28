import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components'

import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Cars from '../pages/Cars/Cars';
import CarDetails from './CarDetails/CarDetails';
import NotFound from '../pages/NotFound/NotFound';

import css from './App.module.css';

const StyledLink = styled(NavLink)`
  color: #000814;
  text-decoration: none;
  background-color: transparent;
  padding: 5px 20px;
  border-radius: 5px;
  font-weight: 600;


  &.active {
    color: #ffffff;
    background-color: #001D3D;
  }
  `;

export default function App() {
  return (
    <div>
      <div className={css.block}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Porsche_Wortmarke.svg/2560px-Porsche_Wortmarke.svg.png" height="15px" alt="logo" />
        <nav className={css.nav_menu}>
        <StyledLink to="/browser-router/">Home</StyledLink>
        <StyledLink to="/browser-router/about">About</StyledLink>
        <StyledLink to="/browser-router/cars">Cars</StyledLink>
        <StyledLink to="/browser-router/404">Try 404</StyledLink>
        </nav>
      </div>
      <Routes>
        <Route path="/browser-router/" element={<Home />} />
        <Route path="/browser-router/about" element={<About />} />
        <Route path="/browser-router/cars" element={<Cars />} />
        <Route path="/browser-router/cars/:id" element={<CarDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
