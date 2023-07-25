import { Routes, Route, NavLink } from 'react-router-dom';
import Clock from './Clock/Clock';
import Counter from './Counter/Counter';
import NotFound from './NotFound/NotFound';
// import css from './App.module.css';
import styled from 'styled-components'

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: #92B5DF;
  }
  `;

export default function App() {
  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/clock">Clock</StyledLink>
        <StyledLink to="/counter">Counter</StyledLink>
      </nav>
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
