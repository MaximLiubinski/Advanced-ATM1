'use strict';

const state = require('./state');
class Query {
    constructor() {
        this.delimiter = "->";
        this.arrayDelimiter = " of ";
    }

    getProtractorElement(query) {
        let page = state.getState();
        let finalElement;
        let queryArr = query.split(this.delimiter);
        for(let i = 0; i < queryArr.length; i++) {
            let currentElement = queryArr[i].trim();
            if(i === 0) {
                finalElement = element(by.css(page[`${currentElement}`]["css"]));
            } else {
                if(currentElement.includes(this.arrayDelimiter)) {
                    let arr = currentElement.split(this.arrayDelimiter);
                    currentElement = arr[1];
                    finalElement = this.elementByIndex(arr[0], page[`${currentElement}`]["css"], finalElement);
                } else {
                    finalElement = finalElement.element(by.css(page[`${currentElement}`]["css"]));
                }
            }
            page = page[`${currentElement}`];
        }
        return finalElement;
    }

    elementByIndex(index, elementCss, root) {
        index = index.match(/#?(\d+)/)[1];
        return root.element.all(elementCss)[index].getWebElement();
    }
}

module.exports = new Query();