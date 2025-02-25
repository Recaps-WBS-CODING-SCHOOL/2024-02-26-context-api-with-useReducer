import { useState } from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import DuckSection from './components/DuckSection';
import AddSection from './components/AddSection';
import Footer from './components/Footer';

function App() {
    const [ducks, setDucks] = useState(
        JSON.parse(localStorage.getItem('ducks')) || []
    );
    return (
        <div className='bg-slate-600 text-gray-300 flex flex-col min-h-screen'>
            <Navbar ducks={ducks} />
            <Header />
            <main className='flex-grow flex flex-col justify-between py-4'>
                <DuckSection ducks={ducks} setDucks={setDucks} />
                <AddSection setDucks={setDucks} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
