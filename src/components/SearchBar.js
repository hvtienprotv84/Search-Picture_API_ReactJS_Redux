import './SearchBar.css';
import React from 'react';
import { connect } from 'react-redux';
import { newQuery, newImages } from '../actions'; 

class SearchBar extends React.Component {
    state = { term: '' };
    
    onFormSumbit = event => {
        event.preventDefault();
        this.props.newQuery(this.state.term);
        this.props.newImages();
    }

    render() {
        const iconClass = 'pd';
        const inputClass = 'input-field';
        const containerClass = 'field container';
        const outerContainerClass = 'outer-container';
        return (
            <div className={outerContainerClass}>
                <form onSubmit={this.onFormSumbit} className=''>
                    <div className={containerClass}>
                        <label className={ iconClass }>
                            <i className="fas fa-search"></i>
                        </label>
                        <input 
                            className={ inputClass }
                            type='text'
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(
    null,
    { newQuery, newImages }
)(SearchBar);