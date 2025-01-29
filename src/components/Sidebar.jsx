import React from 'react';

function Sidebar() {
  const pendingActions = [
    { id: 'trd35468', message: '2 files are waiting to be uploaded', time: '10 days left' },
    { id: '33255577', message: '2 files are waiting to be linked', time: '11 days left' },
    { id: '76298347', message: 'initiated pending', time: null },
    { id: 'Ar65073429', message: 'initiated', time: null },
  ];

  return (
    <aside className="sidebar">
        <div>
      <div className="welcome">
        <h2>👋Welcome back, Michael</h2>
        <p>25 May. 2023 - Tuesday</p>
      </div></div>
      <div className="wallet">
        <h3>My Wallet</h3>
        <p>৳ 2,50,000</p>
        <p>Running low? Notify admin now.</p>
      </div>
      <div className="pending-actions">
        <h3>Pending Actions</h3>
        <ul className='actions-ul'>
          {pendingActions.map(action => (
            <div key={action.id}>
              <p>{action.message}</p>
              <p>{action.time}</p>
            </div>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;