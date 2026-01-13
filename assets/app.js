import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD

// Import des styles
=======
>>>>>>> a6741540712ca4eb98b2c2a8b031a0494a0defad
import './styles/app.css';
import HomePage from './pages/HomePage';
import ForumPage from './pages/ForumPage';
import ArticlePage from './pages/ArticlePage';
import StatsPage from './pages/StatsPage';
import Navbar from './components/Navbar';

<<<<<<< HEAD
// Import des pages
import HomePage from './pages/HomePage';
import ForumPage from './pages/ForumPage';
import ArticlePage from './pages/ArticlePage';
import StatsPage from './pages/StatsPage';
import Navbar from './components/Navbar';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

// NOUVEAU : Import de la page Dashboard Admin
import AdminDashboard from './pages/AdminDashboard';

console.log("🐲 Démarrage de l'application DragonCMS...");
=======
console.log("Démarrage de l'application DragonCMS...");
>>>>>>> a6741540712ca4eb98b2c2a8b031a0494a0defad

const App = () => {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col font-sans text-viking-parchment">
<<<<<<< HEAD
                {/* BANNIÈRE */}
=======
>>>>>>> a6741540712ca4eb98b2c2a8b031a0494a0defad
                <div className="w-full h-32 md:h-48 overflow-hidden border-b-4 border-viking-gold relative shadow-2xl bg-black">
                    <img 
                        src="/images/banniere.png" 
                        alt="Bannière Dragons" 
                        className="w-full h-full object-cover object-center opacity-80 hover:opacity-100 transition duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-viking-dark to-transparent opacity-60"></div>
                </div>

                <Navbar />

                <div className="container mx-auto py-10 px-4 flex-grow relative z-10">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/forum" element={<ForumPage />} />
                        <Route path="/forum/article/:id" element={<ArticlePage />} />
                        <Route path="/statistique" element={<StatsPage />} />
<<<<<<< HEAD
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        
                        {/* NOUVELLE ROUTE : Salle du Conseil (Admin) */}
                        <Route path="/admin" element={<AdminDashboard />} />
=======
>>>>>>> a6741540712ca4eb98b2c2a8b031a0494a0defad
                    </Routes>
                </div>

                <footer className="bg-viking-rock border-t border-viking-gold/30 py-6 mt-10 text-center text-viking-light font-dragon text-sm">
                    <p>© L'Académie de Berk - Archives Draconiques</p>
                </footer>
            </div>
        </BrowserRouter>
    );
};

const rootElement = document.getElementById('react-root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
    console.log("✅ React injecté avec succès !");
} else {
    console.error("❌ Impossible de trouver l'élément #react-root");
}