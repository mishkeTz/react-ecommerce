import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import Spinner from '../../components/with-spinner/spinner.component';

import CollectionPage from './collection.component';

/* GQL
const GET_COLLECTION_BY_TITLE = gql`
    query getCollectionsByTitle($title: String!) {
        getCollectionsByTitle(title: $title) {
            id
            title
            price
            imageUrl
        }
    }
`

const CollectionPageWithGql = ({ match }) => (
    <Query
        query={GET_COLLECTION_BY_TITLE}
        variables={{ title: match.params.collectionId }}>
        {
            ({ loading, data: { getCollectionsByTitle } }) => {
                return loading ?
                    <Spinner /> :
                    <CollectionPage collection={getCollectionsByTitle} />
            }
        }
    </Query>
)
*/

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;

