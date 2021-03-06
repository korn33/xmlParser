import {example} from "./example.js";
import {Parser} from "./Parser.js";
//@ts-ignore
Object.fromEntries = arr => Object.assign({}, ...Array.from(arr, ([k, v]) => ({[k]: v})));

const input = (<HTMLInputElement>document.getElementById('input'));
const output = (<HTMLInputElement>document.getElementById('output'));
const btn = document.getElementById('convert');
const namespace = (<HTMLInputElement>document.getElementById('namespace'));
const parser = new Parser();
const getValueFromInput = () => {
    return input ? input.value : '';
}

let inputValue: string;
let result: string;

const convert = () => {
    inputValue = getValueFromInput();
    if (namespace.value) {
        result = parser.convert(inputValue, namespace.value).toString();
    } else {
        result = parser.convert(inputValue).toString();
    }
    printResult(result);
}

const printResult = (r: string) => {
    output.value = r;
}

if (btn) {
    btn.onclick = convert;
}

console.log('fix 4');