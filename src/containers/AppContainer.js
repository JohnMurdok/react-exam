import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import App from '../components/core/App';

/**
 * App container to connect store with app
 */
class AppContainer extends Component {
    render() {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppContainer.propTypes = {
    store  : PropTypes.object.isRequired
};

export default AppContainer;
