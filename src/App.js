import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/navbar';
import HomePage from './component/homepage';
import Profile from './component/profile';
import Course from './component/course';
import Apply from './component/apply';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/course" element={<Course />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
