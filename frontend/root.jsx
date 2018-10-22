import React from 'react';
import ReactDOM from 'react-dom';
import AutoComplete from './autocomplete';

function Root() {
  return(

    <div>
      <AutoComplete />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'));
});