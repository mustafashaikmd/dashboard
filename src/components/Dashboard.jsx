import React from 'react';
import FrequentlyUsed from './FrequentlyUsed';
import OrderDetails from './OrderDetails';
import ChartSection from './ChartSection';

function Dashboard() {
  return (
    <main className="dashboard">
      <FrequentlyUsed />
      <OrderDetails />
      <ChartSection />
    </main>
  );
}

export default Dashboard;