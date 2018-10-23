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
      //Used a hash to get rid of any duplicates from JSON file
        if (this.state.inputTerm.length === 0) {
          return; 

        } else {
          const types = new Set(['banks', 'loans', 'credit_cards', 'investments', 'mortgages']);
          //Common to type plural versions
          //Regex could probably be used here if types keep increasing
          jsonFile.products.forEach((product) => {
            let term = this.state.inputTerm;
            if (term === 'credit cards' || term === 'credit card') {
              term = 'credit_cards';
            }

            const lowercasedInputTerm = term.toLowerCase();
            const isMatchName = product.name.toLowerCase().includes(lowercasedInputTerm);
            const isMatchType = product.type.toLowerCase().includes(lowercasedInputTerm) || types.has(lowercasedInputTerm);
            
            if (this.state.inputType.length === 0 ) {
              //if there is no specified filter, look for matching terms in the name or the type
              if (isMatchName) {
                results[product.name] = product.url;
              }
              if (isMatchType) {
                results[product.name] = product.url;
              }

            } else {
              //search for matching name and type
              if (isMatchName && product.type === this.state.inputType) {
                results[product.name] = product.url;
              }
            }
            
            
          });
        }
        return results;
  }
   


  render() {
    const results = this.matches();
    return (
      <div className='wrapper'>

        <h1 className='search-title'>Financial Institution Search</h1>
          
        <div className='search-wrapper'>

            <input className='search-term' onChange={(e) => this.handleInput(e)} 
            value={this.state.inputTerm} placeholder='Search names and types here'/>

            <select className='search-type' onChange={(e) => this.setState({inputType: e.target.value})}>
              <option value=''>Filter by type</option>
              <option value='BANK'>Bank</option>
              <option value='CREDIT_CARD'>Credit Card</option>
              <option value='INVESTMENT'>Investment</option>
              <option value='LOAN'>Loan</option>
            </select>
      
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

      </div>
    );
  }
}

export default AutoComplete;