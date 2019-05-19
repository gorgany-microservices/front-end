import React, {Component} from 'react';
import Collapsible from 'react-collapsible';
import PriceFilterElement from './PriceFilterElement'
import OptionsFilterElement from './OptionsFilterElement'

import './FilterElement.css'

class FilterElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            open: props.open ? props.open : false
        };

        if (props.id === 'price') {
            this.state.minPrice = props.minPrice;
            this.state.maxPrice = props.maxPrice;
            this.state.open = true;
        } else {
            this.state.options = props.options;
        }
    }

    renderTrigger = (isOpen) => {
        const headerClasses = isOpen
            ? "filter-element-trigger-text trigger-open"
            : "filter-element-trigger-text trigger-close";
        return (
            <div className="filter-element-trigger">
                <h1 className={headerClasses}>{this.state.name}</h1>
            </div>
        );
    };

    renderBody = () => {
        if (this.state.name === 'price') {
            return <PriceFilterElement name={this.state.name}
                                       minPrice={this.state.minPrice}
                                       maxPrice={this.state.maxPrice}/>;
        } else {
            return <OptionsFilterElement name={this.state.name}
                                         options={this.state.options}/>
        }
    };

    render() {
        return (
            <div className="filter-element-container">
                <Collapsible triggerTagName="div"
                             trigger={this.renderTrigger(false)}
                             triggerWhenOpen={this.renderTrigger(true)}
                             open={this.state.open}
                             transitionTime="250"
                             easing="ease-out">
                    {this.renderBody()}
                </Collapsible>
            </div>
        );
    }
}

export default FilterElement;
