import React from 'react';
import jsonFile from '../products.json';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputTerm : '', inputType: ''};
  }


  handleInput(e) {
    this.setState({inputTerm : e.target.value});

  }

  matches() {
    //match names
    //match type
    //
  }

  render() {
    return (
      <div>
        <label>Search:</label>
        <input onChange={(e) => this.handleInput(e)} value={this.state.inputTerm} />
          <label>Type:</label>
        <select onChange={(e) => this.setState({inputType: e.target.value})}>
          <option value=''>All</option>
          <option value='CREDIT_CARD'>Credit Card</option>
          <option value='BANK'>Bank</option>
          <option value='INVESTMENT'>Investment</option>
        </select>
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