import {ActionType} from "./ActionType.js";
import {combineResult} from "./combineResult.js";

export class Parser {
    private _arr: string[] = [];

    constructor() {
    }

    public convert(v: string) {
        this._arr = this.createArray(v);
        const doubleArray: string[][] = ActionType.listActionTypes.map((type, index) => {
            return this.findSmallArray(type, index);
        });
        const arrObj = doubleArray.map(arr => {
            return this._getObjectFromArray(arr);
        });
        console.log(arrObj.slice(0, -1));
        return combineResult(arrObj.slice(0, -1));
    }

    private findSmallArray(type: string, index: number): string[] {
        const indexType = ActionType.listActionTypes.findIndex(el => el === type);
        const indexStart = this._arr.findIndex(el => {
            return el === type
        });
        const indexEnd = this._arr.findIndex(el => {
            return el === ActionType.listActionTypes[indexType + 1]
        });
        if (index === 0) {
            return this._arr.slice(indexStart + 2, indexEnd);
        }
        return this._arr.slice(indexStart + 1, indexEnd);
    }

    private createArray(v: string): string[] {
        const arr = v.split('\n');
        return arr.map(el => el.trim());
    }

    private _getObjectFromArray(arr: string[]) {
        const doubleArrKeyValue = arr.map(value => {
            return value.split(' ')
        });
        doubleArrKeyValue.forEach(arrKeyValue => {
            arrKeyValue[0] = arrKeyValue[0].slice(0, -1)
        });
        //@ts-ignore
        return Object.fromEntries(doubleArrKeyValue);
    }
}