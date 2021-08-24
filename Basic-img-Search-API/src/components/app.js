
import React from 'react';
//import unsplash from '../api/unsplash';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [] };

    // This also works 
    // onSearchSubmit = async (term) => {
    //     const response = await unsplash.get('/search/photos', {
    //         params: { query: term },
    //     });

    //     this.setState({ images: response.data.results });
    // };

    //This Version works now
    onSearchSubmit = async (term) => {
        try {
             await axios.get('https://api.unsplash.com/search/photos', {
                params: { query: term },
                headers: {
                    Authorization: 'Client-ID '
                    //API key goes after Client-ID not here for sec
                }
            }).then(res => {
                 console.log(res);
            this.setState({ images: res.data.results });

            })
           
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
