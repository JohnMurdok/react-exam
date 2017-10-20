import List from '../../../core/list/List';
import Sith from '../../../../models/sith';
import SithListItem from './SithListItem';

class SithList extends List {
    constructor(props) {
        super(props);
        this.header = Object.assign(this.header, {
            title: 'Sith List',
        });
        this.listItemClass = SithListItem;
        this.Model = Sith;
    }
}

export default SithList;
