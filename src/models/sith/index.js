import Model from '../model';

class Sith extends Model {
    displayName() {
        if(!this.name) {
            return 'Join the dark side by clicking';
        }
        return `Dark/${this.name}`;
    }
}

Sith.prototype.route = '/sith';
export default Sith;