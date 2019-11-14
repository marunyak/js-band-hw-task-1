import LocalStorage from './LocalStorage.js';

class CostOfDelivery {

    setItem(model, cost1, cost2) {
        let local = new LocalStorage('cost');
        let list = local.get();
        list.push({ model: model, cost1: cost1, cost2: cost2 });
        local.save(list);
    }

    getItem() {
        let local = new LocalStorage('cost');
        return local.get();
    }

}
export default CostOfDelivery;
