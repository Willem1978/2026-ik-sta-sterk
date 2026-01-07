import dynamic from 'next/dynamic';

const Valrisicotest = dynamic(() => import('../components/Valrisicotest'), {
  ssr: false,
  loading: () => (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#f8f6f0',
      fontFamily: 'Nunito, sans-serif'
    }}>
      <p>Laden...</p>
    </div>
  )
});

export default function Home() {
  return <Valrisicotest />;
}
