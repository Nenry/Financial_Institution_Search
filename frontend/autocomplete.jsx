import React from 'react';
import jsonFile from '../products.json';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputVal : ''};
  }


  handleInput(e) {
    this.setState({inputVal : e.target.value});

  }

  render() {
    return (
      <div>
        
        
        <input onChange={(e) => this.handleInput(e)} value={this.state.inputVal} />
        <ul>
          {jsonFile.products.map((entity, idx) => 
            <li key={idx}>
              {entity.name}
            </li>
          )}

        </ul>

      </div>
    );
  }
}

export default AutoComplete;