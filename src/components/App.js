import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    render () {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar/>
                <ImageList/>
            </div>
        );
    }
}

export default App;