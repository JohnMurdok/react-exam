import React, { Component } from 'react';

/**
 * List header
 */
class ListHeader extends Component {
    render() {
        const { options } = this.props;
        const style = {
            backgroundColor: options.colors.background,
            color: options.colors.text
        };
        return (
            <div className='list-header' style={style}>
                <h3>{options.title}</h3>
            </div>
        );
    }
}

export default ListHeader;
