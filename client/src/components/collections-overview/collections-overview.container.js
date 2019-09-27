import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux'; 

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../with-spinner/with-spinner.component';

import Spinner from '../with-spinner/spinner.component';

import CollectionsOverview from './collections-overview.component';

const GET_COLLECTIONS = gql`
    {
        collections {
            id
            title
            items {
                id
                name
                price
                imageUrl
            }
        }
    }
`
/**
 * Wrap it with Query component
 * Pass gql query
 * Wait for response
 * Then render what you'd normally show next
 */
const CollectionsOverviewWithGql = () => (
    <Query query={GET_COLLECTIONS}>
        {
            ({ loading, error, data }) => {
                if (loading) return <Spinner />;
                return <CollectionsOverview collections={data.collections} />
            }
        }
    </Query>
)

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;