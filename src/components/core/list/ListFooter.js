import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
                <TextField hintText="Name"  value={this.state.item.name || ''} onChange={this.handleChange.bind(this)} />
                <RaisedButton label={buttonValue} primary={true} onClick={this.onUpdateButtonClick.bind(this)} />
                {item && item.id ? (
                    <RaisedButton label="Remove" secondary={true} onClick={this.onDeleteButtonClick.bind(this)} />
                ): ''}
            </div>
        );
    }
}

ListFooter.propTypes = {
    item  : PropTypes.object.isRequired
};

export default ListFooter;
