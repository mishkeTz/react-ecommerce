import React from 'react';

import Spinner from './spinner.component';

const WithSpinner = WrappedComponent => ({ isLoading, ...restProps }) => {
    return isLoading ? (
        <Spinner />
    ) : <WrappedComponent {...restProps} />
}

export default WithSpinner;