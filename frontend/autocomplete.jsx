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

      const results = {};
        if (this.state.inputType.length === 0 && this.state.inputTerm.length === 0) {
          return; 

        } else if (this.state.inputType.length === 0) {


          jsonFile.products.forEach((obj) => {
            if (obj.name.toLowerCase().includes(this.state.inputTerm.toLowerCase())) {
              results[obj.name] = obj.url;
            }
          });
          // return (

          //   jsonFile.products.filter((obj) =>
          //   obj.name.toLowerCase().includes(this.state.inputTerm.toLowerCase())
          //   )
          // );

        } else if (this.state.inputType.length > 0 && this.state.inputTerm.length > 0) {
          jsonFile.products.forEach((obj) => {
            if (obj.name.toLowerCase().includes(this.state.inputTerm.toLowerCase()) &&
            obj.type === this.state.inputType) {
              results[obj.name] = obj.url;
            }
          });
        }
            // return (

            // // jsonFile.products.filter((obj) =>
            // // obj.name.toLowerCase().includes(this.state.inputTerm.toLowerCase()) &&
            // // obj.type === this.state.inputType
            // // )
            
            // );
        return results;
  }
        
    
    //match names
    //match type
    //

  render() {
    const results = this.matches();
    return (
      <div className='wrapper'>
    

  
          <label>Type</label>

          <select onChange={(e) => this.setState({inputType: e.target.value})}>
            <option value=''>All</option>
            <option value='BANK'>Bank</option>
            <option value='CREDIT_CARD'>Credit Card</option>
            <option value='INVESTMENT'>Investment</option>
            <option value='LOAN'>Loan</option>
          </select>
          <label>Search</label>
          <input className='search-term' onChange={(e) => this.handleInput(e)} 
          value={this.state.inputTerm} placeholder='Type name here'/>
    
        <ul className='search-results'>

          {results ? Object.keys(results).map((name, idx) => 
            <li key={idx}>
              <a href={results[name]}>
              {name}
              </a>
            </li>
          )
          : ""
        }

        </ul>

      </div>
    );
  }
}

export default AutoComplete;