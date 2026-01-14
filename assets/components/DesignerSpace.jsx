import React, { useState, useEffect } from 'react';

const DesignerSpace = () => {
    const [color, setColor] = useState('#e67e22');
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const currentColor = getComputedStyle(document.documentElement)
            .getPropertyValue('--viking-orange').trim();
        
        if (currentColor) {
            setColor(currentColor);
        }
    }, []);

    const handleColorChange = (e) => {
        const newColor = e.target.value;
        setColor(newColor);
        document.documentElement.style.setProperty('--viking-orange', newColor);
    };

    const handleValidate = async () => {
        setIsSaving(true);
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('/api/admin/save-design', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ color: color })
            });

            if (response.ok) {
                alert("⚒️ Succès : Le village a adopté vos nouvelles couleurs !");
            } else {
                alert("⚠️ Erreur : Le Grand Conseil a refusé la modification.");
            }
        } catch (error) {
            console.error("Erreur lors de la sauvegarde:", error);
            alert("❌ La forge est éteinte. Vérifiez votre connexion au serveur.");
        } finally {
            setIsSaving(false);
        }
    };

    // --- NOUVELLE FONCTION DE RÉINITIALISATION ---
    const handleReset = async () => {
        if (!window.confirm("Voulez-vous vraiment restaurer la couleur d'origine ?")) return;
        
        const token = localStorage.getItem('token');
        try {
            const response = await fetch('/api/admin/reset-design', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.ok) {
                const defaultColor = '#e67e22'; // Orange original de Berk
                setColor(defaultColor);
                document.documentElement.style.setProperty('--viking-orange', defaultColor);
                alert("⚒️ Les archives ont été restaurées : retour à l'orange ancestral !");
            }
        } catch (error) {
            console.error("Erreur reset:", error);
            alert("❌ Impossible de réinitialiser les couleurs.");
        }
    };

    return (
        <div className="bg-stone-900 border border-viking-gold/20 p-8 shadow-2xl rounded-lg animate-in fade-in duration-500">
            <h2 className="text-2xl font-dragon text-viking-gold mb-6 uppercase tracking-widest">
                Forge de l'Apparence
            </h2>
            
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="flex flex-col items-center gap-2">
                    <label className="text-[10px] uppercase text-stone-500 font-black">Teinte du Titre</label>
                    <input 
                        type="color" 
                        value={color} 
                        onChange={handleColorChange}
                        className="w-24 h-24 cursor-pointer bg-transparent border-2 border-stone-700 rounded-xl hover:scale-105 transition-transform"
                    />
                </div>

                <div className="flex-1 bg-black/40 p-8 rounded border border-stone-800 w-full text-center">
                    <p className="text-[10px] text-stone-600 uppercase mb-4 tracking-widest">Rendu en direct</p>
                    <p style={{ color: color }} className="text-5xl font-dragon uppercase tracking-widest transition-colors duration-300">
                        Riders of Berk
                    </p>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <button 
                    onClick={handleValidate}
                    disabled={isSaving}
                    className={`w-full py-4 font-black uppercase tracking-[0.3em] transition-all rounded shadow-lg ${
                        isSaving 
                        ? 'bg-stone-800 text-stone-600 cursor-not-allowed' 
                        : 'bg-viking-gold text-black hover:bg-yellow-500 active:scale-95 shadow-yellow-900/20'
                    }`}
                >
                    {isSaving ? 'Gravure en cours...' : 'Valider les changements'}
                </button>

                {/* BOUTON DE RÉINITIALISATION */}
                <button 
                    onClick={handleReset}
                    className="w-full py-2 text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-red-500 transition-colors"
                >
                    Réinitialiser la couleur par défaut
                </button>
            </div>
        </div>
    );
};

export default DesignerSpace;