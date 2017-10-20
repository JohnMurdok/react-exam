import List from '../../../core/list/List';
import JediListItem from './JediListItem';
import Jedi from '../../../../models/jedi';

/**
 * Heritage of basic list
 * Render a Jedi List
 */
class JediList extends List {
    constructor(props) {
        super(props);
        this.listItemClass = JediListItem;
        this.header = Object.assign(this.header, {
            title: 'Jedi List',
            colors: {
                background: '#27ae60',
                text: 'white'
            }
        });
        this.Model = Jedi;
    }
}

export default JediList;
