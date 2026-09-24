import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function App() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Vendas',
        data: [12, 19, 3, 5, 2],
        borderColor: 'blue',
        backgroundColor: 'lightblue',
      },
    ],
  };

  return (
    <div style={{ width: '600px', margin: '50px auto' }}>
      <h2>Dashboard Interativo</h2>
      <Line data={data} />
    </div>
  );
}

export default App;
