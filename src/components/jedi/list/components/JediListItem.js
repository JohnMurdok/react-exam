import React from 'react';
import ListItem from '../../../core/list/ListItem';


/**
 * Heritage of list item
 * Jedi list item
 */
class JediListItem extends ListItem {

    render() {
        const { item } = this.props;
        return (
            <div className={`list-item jedi-item ${item.lightsaber}`} onClick={this.handleClick.bind(this)}>
                <p>{item.displayName()}</p>
            </div>
        );
    }
}

export default JediListItem;
