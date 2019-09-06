import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import collections from './shop.data';

class ShopPage extends React.Component {
    state = {
        collections,
    }
    
    render() {

        const { collections } = this.state;

        return (
            <div>
                {collections.map(({ id, ...restProps}) => (
                    <CollectionPreview key={id} {...restProps} /> 
                ))}
            </div>
        )
    }
}

export default ShopPage;