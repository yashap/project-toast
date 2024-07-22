import React from 'react';

import ToastPlayground from '../ToastPlayground';
import { ToastProvider } from '../Toast';
import Footer from '../Footer';

function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
      <Footer />
    </ToastProvider>
  );
}

export default App;
