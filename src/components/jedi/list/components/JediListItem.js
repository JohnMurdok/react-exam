import ListItem from '../../../core/list/ListItem';


/**
 * Heritage of list item
 * Jedi list item
 */
class JediListItem extends ListItem {

    getListClass(item) {
        return `list-item jedi-item ${item.lightsaber}`;   
    }
}

export default JediListItem;
