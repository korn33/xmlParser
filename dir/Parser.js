import { ActionType } from "./ActionType.js";
import { combineResult } from "./combineResult.js";
export class Parser {
    constructor() {
        this._arr = [];
    }
    convert(v) {
        this._arr = this.createArray(v);
        const doubleArray = ActionType.listActionTypes.map((type, index) => {
            return this.findSmallArray(type, index);
        });
        const arrObj = doubleArray.map(arr => {
            return this._getObjectFromArray(arr);
        });
        console.log(arrObj.slice(0, -1));
        return combineResult(arrObj.slice(0, -1));
    }
    findSmallArray(type, index) {
        const indexType = ActionType.listActionTypes.findIndex(el => el === type);
        const indexStart = this._arr.findIndex(el => {
            return el === type;
        });
        const indexEnd = this._arr.findIndex(el => {
            return el === ActionType.listActionTypes[indexType + 1];
        });
        if (index === 0) {
            return this._arr.slice(indexStart + 2, indexEnd);
        }
        return this._arr.slice(indexStart + 1, indexEnd);
    }
    createArray(v) {
        const arr = v.split('\n');
        return arr.map(el => el.trim());
    }
    _getObjectFromArray(arr) {
        const doubleArrKeyValue = arr.map(value => {
            return value.split(' ');
        });
        doubleArrKeyValue.forEach(arrKeyValue => {
            arrKeyValue[0] = arrKeyValue[0].slice(0, -1);
        });
        return Object.fromEntries(doubleArrKeyValue);
    }
}
