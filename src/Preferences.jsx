export function Preferences () {
    return (
        <section class="preferences">
        <div class="container">
            <div class="preferences__wrapper">
                <ol class="preferences__list-ordered">
                    <li class="preferences__item">
                        <a href="#wayofdrinking" class="preferences__link-driver">Preferences</a>
                    </li>

                    <li class="preferences__item">
                        <a href="#typeofcoffee" class="preferences__link-driver link--nd">Bean Type</a>
                    </li>

                    <li class="preferences__item">
                        <a href="#weigh" class="preferences__link-driver link--rd">Quantity</a>
                    </li>

                    <li class="preferences__item">
                        <a href="#grinding" class="preferences__link-driver link--rth">Grind Option</a>
                    </li>

                    <li class="preferences__item">
                        <a href="#frequency" class="preferences__link-driver link--fth">Deliveries</a>
                    </li>
                </ol>

                <div class="preferences__wrapper-left">
                    <div class="preferences__wrapper-list" id="wayofdrinking">
                        <h3 class="preferences__heading">How do you drink your coffee?</h3>

                        <ul class="preferences__list-option">                                
                            <li class="preferences__item-option">
                                <h3 class="preferences__heading-item">Capsule</h3>

                                <p class="preferences__text-item text--similarities">Compatible with Nespresso systems and similar brewers</p>
                            </li>
                            
                            <li class="preferences__item-option">
                                <h3 class="preferences__heading-item">Filter</h3>

                                <p class="preferences__text-item text--similarities">For pour over or drip methods like Aeropress, Chemex, and V60</p>
                            </li>

                            <li class="preferences__item-option">
                                <h3 class="preferences__heading-item">Espresso</h3>

                                <p class="preferences__text-item text--similarities">Dense and finely ground beans for an intense, flavorful experience</p>
                            </li>
                        </ul>
                    </div>

                    <div class="preferences__wrapper-list" id="typeofcoffee">
                        <h3 class="preferences__heading">What type of coffee?</h3>

                        <ul class="preferences__list-option">                                
                            <li class="preferences__item-option">
                                <h3 class="preferences__heading-item">Single Origin</h3>

                                <p class="preferences__text-item text--similarities">Distinct, high quality coffee from a specific family-owned farm</p>
                            </li>
                            
                            <li class="preferences__item-option">
                                <h3 class="preferences__heading-item">Decaf</h3>

                                <p class="preferences__text-item text--similarities">Just like regular coffee, except the caffeine has been removed</p>
                            </li>

                            <li class="preferences__item-option">
                                <h3 class="preferences__heading-item">Blended</h3>

                                <p class="preferences__text-item text--similarities">Combination of two or three dark roasted beans of organic coffees</p>
                            </li>
                        </ul>
                    </div>

                    <div class="preferences__wrapper-list" id="weigh">
                        <h3 class="preferences__heading">How much would you like?</h3>

                        <ul class="preferences__list-option">                                
                            <li class="preferences__item-option">
                                <h3 class="preferences__heading-item">250g</h3>

                                <p class="preferences__text-item text--similarities">Perfect for the solo drinker. Yields about 12 delicious cups.</p>
                            </li>
                            
                            <li class="preferences__item-option">
                                <h3 class="preferences__heading-item">500g</h3>

                                <p class="preferences__text-item text--similarities">Perfect option for a couple. Yields about 40 delectable cups.</p>
                            </li>

                            <li class="preferences__item-option">
                                <h3 class="preferences__heading-item">1000g</h3>

                                <p class="preferences__text-item text--similarities">Perfect for offices and events. Yields about 90 delightful cups.</p>
                            </li>
                        </ul>
                    </div>

                    <div class="preferences__wrapper-list" id="grinding">
                        <h3 class="preferences__heading">Want us to grind them?</h3>

                        <ul class="preferences__list-option">                                
                            <li class="preferences__item-option">
                                <h3 class="preferences__heading-item">Wholebean</h3>

                                <p class="preferences__text-item text--similarities">Best choice if you cherish the full sensory experience</p>
                            </li>
                            
                            <li class="preferences__item-option">
                                <h3 class="preferences__heading-item">Filter</h3>

                                <p class="preferences__text-item text--similarities">For drip or pour-over coffee methods such as V60 or Aeropress</p>
                            </li>

                            <li class="preferences__item-option">
                                <h3 class="preferences__heading-item">Cafetiére</h3>

                                <p class="preferences__text-item text--similarities">Course ground beans specially suited for french press coffee</p>
                            </li>
                        </ul>
                    </div>

                    <div class="preferences__wrapper-list"  id="frequency">
                        <h3 class="preferences__heading">How do you drink your coffee?</h3>

                        <ul class="preferences__list-option">                                
                            <li class="preferences__item-option">
                                <h3 class="preferences__heading-item">Every week</h3>

                                <p class="preferences__text-item text--similarities">$7.20 per shipment. Includes free first-class shipping.</p>
                            </li>
                            
                            <li class="preferences__item-option">
                                <h3 class="preferences__heading-item">Every 2 weeks</h3>

                                <p class="preferences__text-item text--similarities">$9.60 per shipment. Includes free priority shipping.</p>
                            </li>

                            <li class="preferences__item-option">
                                <h3 class="preferences__heading-item">Every month</h3>

                                <p class="preferences__text-item text--similarities">$12.00 per shipment. Includes free priority shipping.</p>
                            </li>
                        </ul>
                    </div>

                    <ul class="preferences__list-order">
                        <li class="preferences__text-total text--similarities">Order Summary</li>

                        <li class="preferences__text-info">“I drink my coffee as Filter, with a Decaf type of bean. 250g ground ala Cafetiére, sent to me Every Week.”</li>
                    </ul>

                    <a href="#" class="preferences__link-overlooked link--button">Create my plan!</a>
                </div>
            </div>
        </div>
    </section>
    )
}