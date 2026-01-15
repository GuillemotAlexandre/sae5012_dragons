import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import des styles
import './styles/app.css';

// Import des pages
import HomePage from './pages/HomePage';
import ForumPage from './pages/ForumPage';
import ArticlePage from './pages/ArticlePage';
import StatsPage from './pages/StatsPage';
import Navbar from './components/Navbar';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ArticleShow from './components/ArticleShow';

// Import de la page Dashboard Admin
import AdminDashboard from './pages/AdminDashboard';

console.log("🐲 Démarrage de l'application DragonCMS...");

const App = () => {
    
    // --- SYSTÈME DE CHARGEMENT DU DESIGN (VERSION SILENCIEUSE) ---
    useEffect(() => {
        fetch('/design_config.json')
            .then(response => {
                // Si le fichier n'existe pas, on renvoie null sans faire d'erreur
                if (!response.ok) return null;
                return response.json();
            })
            .then(data => {
                // On n'applique la couleur que si le fichier a été trouvé et contient la donnée
                if (data && data.primaryColor) {
                    document.documentElement.style.setProperty('--viking-orange', data.primaryColor);
                    console.log("🎨 Design chargé depuis la forge :", data.primaryColor);
                }
            })
            .catch(() => {
                // En cas d'erreur réseau, on ne log plus d'erreur rouge
                // Le village utilise simplement les couleurs du CSS par défaut
            });
    }, []); 

    return (
        <BrowserRouter>
            <div className="min-h-screen flex flex-col font-sans text-viking-parchment">
                {/* BANNIÈRE */}
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
                        <Route path="/forum/article/:id" element={<ArticleShow />} />
                        <Route path="/statistique" element={<StatsPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/admin" element={<AdminDashboard />} />
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