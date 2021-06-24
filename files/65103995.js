import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AuctionFormComponent extends Component {
    @action 
    selectProduct(event) {
        // This `updateProduct` has to be implemented in parent class 
        // which mutates the `auction` object.
        this.args.updateProduct(event.target.value); // -> `on` modifier will capture the native event
    }

    @action 
    save(auction) {
        auction.save();
    }
}
