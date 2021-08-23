
import React from 'react';
//import unsplash from '../api/unsplash';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    // onSearchSubmit = async (term) => {
    //     const response = await unsplash.get('/search/photos', {
    //         params: { query: term },
    //     });

    //     this.setState({ images: response.data.results });
    // };

    async onSearchSubmit(term) {
        try {
            const response = await axios.get('https://api.unsplash.com/search/photos', {
                params: { query: term },
                headers: {
                    Authorization: 'Client-ID'
                }
            })
            console.log(response);
            this.setState({ images: response.data.results });
        } catch (error) {
            console.log(error);
        };

    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
