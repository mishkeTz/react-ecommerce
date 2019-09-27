import React from 'react';

import {
    ErrorImageOverlay,
    ErrorImageContainer,
    ErrorImageText,
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
    }

    /**
     * Catches any error that was thrown in any of the children of this component.
     */
    static getDerivedStateFromError(error) {
        // return state object
        return { hasError: true }
    }

    /**
     * Gives us an error and info related to that error.
     * I.e which component did throw an error etc.
     * 
     * This method is the plase where we can, if we want to, perform some side effects.
     */
    componentDidCatch(error, info) {
        // ...
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/oCkEbrA.png' />
                    <ErrorImageText>Sorry, this page is broken.</ErrorImageText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;