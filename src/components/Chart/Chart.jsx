import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const barChart = (
    confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [confirmed, recovered, deaths],
            },
          ],
        }}
        options={{
          plugins: {
            legend: { display: false },
            title: { display: true, text: `Current state in ${country}` },
          },
        }}
      />
    ) : null
  );
  return (
    <div className={styles.container}>
      {country && barChart}
    </div>
  );
}

export default Chart;
