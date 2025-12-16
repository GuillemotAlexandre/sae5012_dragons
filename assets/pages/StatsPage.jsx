import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement,
} from 'chart.js';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

const StatsPage = () => {
  const [boxOfficeData, setBoxOfficeData] = useState(null);
  const [populationData, setPopulationData] = useState(null);
  const [timelineData, setTimelineData] = useState(null);

  const loadCSV = (url, callback) => {
    fetch(url)
      .then(r => r.ok ? r.text() : null)
      .then(txt => {
        if(!txt) return;
        const lines = txt.trim().split('\n');
        if (lines.length < 2) return;
        const headers = lines[0].split(';').map(h => h.trim());
        const data = lines.slice(1).map(l => {
            const vals = l.split(';').map(v => v.trim());
            return headers.reduce((acc, h, i) => ({...acc, [h]: vals[i]}), {});
        });
        if (data.length) callback(data);
      })
      .catch(e => console.error(e));
  };

  useEffect(() => {
    // 1. Box Office
    loadCSV('/data/stats/box_office.csv', (data) => {
      setBoxOfficeData({
        labels: data.map(i => i['Film']),
        datasets: [{
          label: 'M$',
          data: data.map(i => parseFloat(i['Box Office (Millions $)'])),
          backgroundColor: ['#7f1d1d', '#dc2626', '#d97706'], // Couleurs Viking
          borderColor: '#292524',
          borderWidth: 2
        }]
      });
    });

    // 2. Population
    loadCSV('/data/stats/berk_population.csv', (data) => {
      setPopulationData({
        labels: data.map(i => i['Groupe']),
        datasets: [{
          data: data.map(i => parseFloat(i['Population'])),
          backgroundColor: ['#d97706', '#7f1d1d', '#57534e', '#a8a29e'],
          borderColor: '#1c1917',
          borderWidth: 2
        }]
      });
    });

    // 3. Timeline
    loadCSV('/data/stats/dragons_timeline.csv', (data) => {
        setTimelineData({
          labels: data.map(i => i['Année']),
          datasets: [{
            label: 'Espèces',
            data: data.map(i => parseFloat(i['Espèces Recensées'])),
            borderColor: '#d97706', // Or
            backgroundColor: 'rgba(217, 119, 6, 0.2)',
            pointBackgroundColor: '#fff',
            tension: 0.3,
          }]
        });
      });
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { labels: { color: '#e7e5e4', font: { family: 'serif' } } } },
    scales: {
      y: { ticks: { color: '#a8a29e' }, grid: { color: '#44403c' } },
      x: { ticks: { color: '#a8a29e' }, grid: { color: '#44403c' } }
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-5xl font-dragon text-viking-gold mb-4 drop-shadow-md">
                L'Observatoire de Berk
            </h1>
            <p className="text-viking-light text-lg italic border-b border-viking-gold/30 inline-block pb-2">
                Recensement officiel de l'archipel
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box Office */}
            <div className="bg-viking-rock p-6 rounded-lg border-2 border-stone-600 shadow-2xl relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-viking-gold"></div>
                <h3 className="text-2xl font-dragon text-white mb-6">Trésor de Guerre</h3>
                <div className="h-64 relative">
                    {boxOfficeData ? <Bar options={options} data={boxOfficeData} /> : <p className="text-center mt-10">Chargement...</p>}
                </div>
            </div>

            {/* Population */}
            <div className="bg-viking-rock p-6 rounded-lg border-2 border-stone-600 shadow-2xl relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-viking-gold"></div>
                <h3 className="text-2xl font-dragon text-white mb-6">Clans & Tribus</h3>
                <div className="h-64 relative flex justify-center">
                    {populationData ? <Doughnut options={{...options, scales:{}}} data={populationData} /> : <p className="text-center mt-10">Chargement...</p>}
                </div>
            </div>

            {/* Timeline */}
            <div className="bg-viking-rock p-6 rounded-lg border-2 border-stone-600 shadow-2xl md:col-span-2 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-viking-gold"></div>
                <h3 className="text-2xl font-dragon text-white mb-6">Chronologie des Découvertes</h3>
                <div className="h-80 relative">
                    {timelineData ? <Line options={options} data={timelineData} /> : <p className="text-center mt-10">Chargement...</p>}
                </div>
            </div>
        </div>
    </div>
  );
};

export default StatsPage;