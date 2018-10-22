import React from 'react';
import ReactDOM from 'react-dom';


function Root() {
  return(

    <div>
      test
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});