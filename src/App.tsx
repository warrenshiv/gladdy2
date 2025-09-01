import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/common';
import { routes } from './routes';

function App() {
  return (
    <Routes>
      {routes.map(({ path, element: Component, layout }) => {
        if (layout === 'vendor' || layout === 'dashboard') {
          return <Route key={path} path={path} element={<Component />} />;
        }
        
        return (
          <Route 
            key={path} 
            path={path} 
            element={
              <div className="min-h-screen bg-white">
                <Header />
                <Component />
                <Footer />
              </div>
            } 
          />
        );
      })}
    </Routes>
  );
}

export default App;