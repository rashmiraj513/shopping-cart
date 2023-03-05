import React, { Component } from 'react';
import Counter from './couter';

class Counters extends Component {
  render() {
    const { counters, onDelete, onIncrement, onReset } = this.props;
    return (
      <div>
        <button onClick={onReset} className='btn btn-failure btn-sm'>
          Reset
        </button>
        <br />
        <div className='center'>
          {counters.map(counter =>
            <Counter key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              counter={counter}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Counters;