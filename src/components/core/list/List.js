import React from 'react';
import PropTypes from 'prop-types';
import ListHeader from './ListHeader';
import ListItem from './ListItem';
import ListFooter from './ListFooter';
import './list.css';
import {List} from 'material-ui/List';
import Divider from 'material-ui/Divider';

/**
 * Basic core list component
 */
class UIList extends List {

    constructor(props) {
        super(props);
        this.listItemClass = ListItem;
        this.header = {
            title: '',
            colors: {
                background: '#e74c3c',
                text: 'white',
            },
        };
        this.Model = null;
        this.state = {
            item: {}
        };
    }

    /**
     * Load model on mount
     */
    componentWillMount() {
        if(this.props.findAll) {
            this.props.findAll();
        }
    }

    componentWillReceiveProps(nextProps) {
        this.refreshFooter();
    }

    refreshFooter(){
        const item = new this.Model();
        this.setState({
            item,
        });
    }

    /**
     * On list item click
     * @param {*} item 
     */
    selectItem(item){
        this.setState({
            item
        });
    }

    /**
     * When user click on add/update button on ListFooter
     * @param {*} item 
     */
    onUpdateButtonClick(item) {
        if(this.props.save) {
            this.props.save(item);
        }
    }

    /**
     * When user click on delete button on ListFooter
     * @param {*} item 
     */
    onDeleteButtonClick(item) {
        if(this.props.remove) {
            this.props.remove(item);
        }
    }

    /**
     * Using list item class for render list
     * @param {*} item 
     */
    renderItem(item, index) {
        const Item = this.listItemClass;
        return (
            <div key={index}>
                <Item item={item} selectItem={this.selectItem.bind(this)}/>
                <Divider />
            </div>
        )
    }

    /**
     * Render list
     */
    render() {
        const { items } = this.props;
        const newItem = new this.Model();

        return (
            <div className='list'>
                <ListHeader options={this.header} />
                <div className='list-container'>
                    {items.map((item, index) => this.renderItem(item, index))}
                    {this.renderItem(newItem, 'new')}
                    <ListFooter item={this.state.item}
                         addAction={this.onUpdateButtonClick.bind(this)} 
                         deleteAction={this.onDeleteButtonClick.bind(this)} 
                    />
                </div>
            </div>
        );
    }
}

UIList.propTypes = {
    items  : PropTypes.array
};

export default UIList;
