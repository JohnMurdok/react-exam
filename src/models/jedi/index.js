import Model from '../model';

const lightsabers = ['green', 'purple', 'blue'];

class Jedi extends Model {
    constructor(data) {
        super(data);
        this.setLightSaber();
    }

    setLightSaber() {
        if(!this.lightsaber) {
            const random = Math.floor(Math.random() * lightsabers.length);
            this.lightsaber = lightsabers[random];
        }
    }

    displayName() {
        if(!this.name) {
            return 'Click to add new jedi';
        }
        return `Master ${this.name}`;
    }

    displayPower() {
        if(!this.id) {
            return `May the force be with you`;
        }
        return `Use a ${this.lightsaber} lightsaber`;
    }
}

Jedi.prototype.route = '/jedi';
export default Jedi;