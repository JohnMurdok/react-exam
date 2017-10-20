import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListFooter extends Component {
    constructor(props){
        super(props);
        this.state = {
            item: {
                name: ''
            }
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.setState({
            item: nextProps.item
        });
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({
            item: Object.assign(this.state.item, {
                name: e.currentTarget.value
            })
        });
    }

    onUpdateButtonClick(e) {
        e.preventDefault();
        this.props.addAction(this.state.item);
    }

    onDeleteButtonClick(e) {
        e.preventDefault();
        this.props.deleteAction(this.props.item);
    }

    render() {
        const { item } = this.props;
        const buttonValue = item.id ? 'Update' : 'Add';
        return (
            <div className='list-footer'>
                <input type="text" value={this.state.item.name || ''} onChange={this.handleChange.bind(this)} />
                <button onClick={this.onUpdateButtonClick.bind(this)}>{buttonValue}</button>
                {item && item.id ? (
                <button onClick={this.onDeleteButtonClick.bind(this)}>Remove</button>
                ): ''}
            </div>
        );
    }
}

ListFooter.propTypes = {
    item  : PropTypes.object.isRequired
};

export default ListFooter;
