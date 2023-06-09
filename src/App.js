import React, { useEffect } from 'react';
import Header from './component/navbar';
import HomePage from './component/homepage';
import Profile from './component/profile';
import Apply from './component/apply';

const App = () => {
  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;
      if (path === '/homepage') {
        setContent(<HomePage />);
      } else if (path === '/profile') {
        setContent(<Profile />);
      } else if (path === '/apply') {
        setContent(<Apply />);
      }
    };

    handleNavigation(); 

    window.addEventListener('popstate', handleNavigation); 
    return () => {
      window.removeEventListener('popstate', handleNavigation); 
    };
  }, []);

  const [content, setContent] = React.useState(null);

  return (
    <div className="App">
      <Header />
      <div>{content}</div>
    </div>
  );
};

export default App;
