import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className='container container-fluid mt-5'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;