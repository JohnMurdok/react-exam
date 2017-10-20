import React from 'react';
import ListItem from '../../../core/list/ListItem';

class SithListItem extends ListItem {

    render() {
        const { item } = this.props;
        return (
            <div className={`list-item sith-item`} onClick={this.handleClick.bind(this)}>
                <p>{item.displayName()}</p>
            </div>
        );
    }
}

export default SithListItem;
