import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * ListItem
 */
class ListItem extends Component {

    /**
     * On list item click
     * @param {*} e 
     * @param {*} item 
     */
    handleClick(e, item) {
        e.preventDefault();
        this.props.selectItem(this.props.item);
    }

    render() {
        const { item } = this.props;
        return (
            <div onClick={this.handleClick.bind(this)}>
                <p>{item.name}</p>
            </div>
        );
    }
}

ListItem.propTypes = {
    item  : PropTypes.object.isRequired
};

export default ListItem;
