import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';

/**
 * ListItem
 */
class UIListItem extends Component {

    getListClass(item) {
        return `list-item`;   
    }
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
            <ListItem 
                className={this.getListClass(item)}
                primaryText={item.displayName()} 
                secondaryText={item.displayPower()} 
                onClick={this.handleClick.bind(this)}
            />
        );
    }
}

UIListItem.propTypes = {
    item  : PropTypes.object.isRequired
};

export default UIListItem;
