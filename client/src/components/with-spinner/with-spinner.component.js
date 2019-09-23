import React from 'react';

import {
    SpinnerOverlay,
    SpinnerContainer,
} from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({ isLoading, ...restProps }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : <WrappedComponent {...restProps} />
}

export default WithSpinner;