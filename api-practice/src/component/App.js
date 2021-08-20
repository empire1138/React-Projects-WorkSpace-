import React from 'react';
import superHero from '../api/superHero';
import SearchBar from './SearchBar';
import ReturnRes from './returnRes';

class App extends React.Component {

    state = { names: [] };

    onSearchSubmit = async term => {
        const response = await superHero.get(`/search/`, {
            params: { name: term }
        }).then(response => response.json())
            .then(data => console.log(data));
        this.setState({ names: response.data.results });
    }

    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <br />
                <ReturnRes names={this.state.names} />
            </div>
        )
    }
}



export default App