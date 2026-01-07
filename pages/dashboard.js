import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('../components/Dashboard'), {
  ssr: false,
  loading: () => (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#F8FAFC',
      fontFamily: 'Nunito, sans-serif'
    }}>
      <p>Dashboard laden...</p>
    </div>
  )
});

export default function DashboardPage() {
  return <Dashboard />;
}
