import {example} from "./example.js";
import {Parser} from "./Parser.js";
//@ts-ignore
Object.fromEntries = arr => Object.assign({}, ...Array.from(arr, ([k, v]) => ({[k]: v}) ));

const input = (<HTMLInputElement>document.getElementById('input'));
const output = (<HTMLInputElement>document.getElementById('output'));
const btn = document.getElementById('convert')
const parser = new Parser();
const getValueFromInput = () => {
    return input ? input.value : '';
}

const getValueFromExample = () => {
    return example.value.toString();
}
let inputValue: string;
let result: string;

const convert = () => {
    if (getValueFromInput()) {
        inputValue = getValueFromInput();
    } else if (getValueFromExample()) {
        inputValue = getValueFromExample();
    }
    result = parser.convert(inputValue).toString();
    printResult(result);
}

const printResult = (r: string) => {
    output.value = r;
}

if (btn) {
    btn.onclick = convert;
}

console.log('fix 2');