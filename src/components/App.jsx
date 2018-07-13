import React from 'react';
import Header from './Header';
import TicketList from './TicketList';

function App(){
  return (
    <div>
      <style jsx global>{`
        body {
          font-family: Helvetica;
        }
      `}
      </style>
      <Header/>
      <TicketList/>
    </div>
  );
}

export default App;
