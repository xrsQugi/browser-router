import { Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components'

import Home from './Home/Home';
import Clock from './Clock/Clock';
import Counter from './Counter/Counter';
import NotFound from './NotFound/NotFound';

import css from './App.module.css';

const StyledLink = styled(NavLink)`
  color: #221824;
  text-decoration: none;
  background-color: transparent;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 600;


  &.active {
    color: #4C7BA8;
    background-color: #D8E4F3;
  }
  `;

export default function App() {
  return (
    <div>
      <div className={css.block}>
        <img src="https://logos-world.net/wp-content/uploads/2021/09/Pagani-Logo.png" height="40px" alt="logo" />
        <nav className={css.nav_menu}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Clock />} />
        <Route path="/products" element={<Counter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
