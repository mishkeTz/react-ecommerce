import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient, gql } from 'apollo-boost';
import { resolvers, typeDefs } from './graphql/resolvers';

import storeConfig from './redux/store';

import { BrowserRouter } from 'react-router-dom';

/** Apollo */
const httpLink = createHttpLink({
    uri: 'https://crwn-clothing.com'
});

const cache = new InMemoryCache();

const client = new ApolloClient({
    link: httpLink,
    cache,
    typeDefs,
    resolvers,
});
/*
client.query({
    query: gql`
        {
            getCollectionsByTitle(title: "hats") {
                id,
                title,
                items {
                    id,
                    name,
                    price,
                    imageUrl
                }
            }
        }
    `
}).then(res => console.log('gqp res', res));
*/
client.writeData({
    data: {
        cartHidden: true,
    },
});

/** End Apollo */

const app = (
    <ApolloProvider client={client}>
        <Provider store={storeConfig.store}>
            <BrowserRouter>
                <PersistGate persistor={storeConfig.persistor}>
                    <App />
                </PersistGate>
            </BrowserRouter>
        </Provider>
    </ApolloProvider>
)

ReactDOM.render(app, document.getElementById('root'));