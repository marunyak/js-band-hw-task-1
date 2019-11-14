import Transport from './Transport.js';

class Ship extends Transport {
    showAvarageSpeed() {
        return this.speed;
    }
}

export default Ship;
