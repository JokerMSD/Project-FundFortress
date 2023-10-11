import { Header } from '../../components/Header'
import { useState, useEffect } from 'react'
import { FinanceApp } from '../../components/FinanceCardFather'


export const LandingPage = () => {

  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
   });
 
   useEffect (() => {
     localStorage.setItem("darkMode", JSON.stringify(darkMode));
   },[darkMode]);
 
   const handleDarkMode  = () => {
     setDarkMode(!darkMode);
   };
 
   useEffect (() => {
    if (darkMode) {
       document.body.classList.add("dark-mode");
    } else {
       document.body.classList.remove("dark-mode");
    }
   },[darkMode]);
 
  return (
    <>
     <Header darkMode={darkMode} handleDarkMode={handleDarkMode} />
     <main>
        <FinanceApp darkMode={darkMode} handleDarkMode={handleDarkMode}  />
     </main>
     <footer/>
    </>
  );
};
