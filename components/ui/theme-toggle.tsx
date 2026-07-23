"use client";

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const dark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDark(dark);
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    const newIsDark = html.classList.contains('dark');
    setIsDark(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
  };

  if (!mounted) return <div className="w-[60px] h-[30px]" />;

  return (
    <StyledWrapper>
      <div className="toggleWrapper">
        <input 
          className="input" 
          id="dn" 
          type="checkbox" 
          checked={isDark} 
          onChange={toggleTheme} 
        />
        <label className="toggle" htmlFor="dn">
          <span className="toggle__handler">
            <span className="crater crater--1" />
            <span className="crater crater--2" />
            <span className="crater crater--3" />
          </span>
          <span className="star star--1" />
          <span className="star star--2" />
          <span className="star star--3" />
          <span className="star star--4" />
          <span className="star star--5" />
          <span className="star star--6" />
        </label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;

  .toggleWrapper {
    position: relative;
    overflow: hidden;
  }

  .toggleWrapper .input {
    position: absolute;
    left: -99em;
  }

  .toggle {
    cursor: pointer;
    display: inline-block;
    position: relative;
    width: 60px;
    height: 30px;
    background-color: #83d8ff;
    border-radius: 84px;
    transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  .toggle__handler {
    display: inline-block;
    position: relative;
    z-index: 1;
    top: 2px;
    left: 2px;
    width: 26px;
    height: 26px;
    background-color: #ffcf96;
    border-radius: 50px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: rotate(-45deg);
  }

  .toggle__handler .crater {
    position: absolute;
    background-color: #e8cda5;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    border-radius: 100%;
  }

  .toggle__handler .crater--1 { top: 10px; left: 6px; width: 3px; height: 3px; }
  .toggle__handler .crater--2 { top: 16px; left: 14px; width: 4px; height: 4px; }
  .toggle__handler .crater--3 { top: 6px; left: 15px; width: 5px; height: 5px; }

  .star { position: absolute; background-color: #fff; transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95); border-radius: 50%; }
  .star--1 { top: 5px; left: 25px; z-index: 0; width: 20px; height: 2px; }
  .star--2 { top: 10px; left: 20px; z-index: 1; width: 20px; height: 2px; }
  .star--3 { top: 15px; left: 28px; z-index: 0; width: 20px; height: 2px; }
  .star--4, .star--5, .star--6 { opacity: 0; transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95); }
  .star--4 { top: 10px; left: 8px; width: 2px; height: 2px; }
  .star--5 { top: 20px; left: 12px; width: 2px; height: 2px; }
  .star--6 { top: 22px; left: 20px; width: 2px; height: 2px; }

  .input:checked + .toggle { background-color: #749dd6; }
  .input:checked + .toggle .toggle__handler { background-color: #ffe5b5; transform: translate3d(30px, 0, 0) rotate(0); }
  .input:checked + .toggle .toggle__handler .crater { opacity: 1; }
  .input:checked + .toggle .star--1 { width: 2px; height: 2px; }
  .input:checked + .toggle .star--2 { width: 3px; height: 3px; transform: translate3d(-5px, 0, 0); }
  .input:checked + .toggle .star--3 { width: 2px; height: 2px; transform: translate3d(-7px, 0, 0); }
  .input:checked + .toggle .star--4, .input:checked + .toggle .star--5, .input:checked + .toggle .star--6 { opacity: 1; }
`;
