import { example } from "./example.js";
import { Parser } from "./Parser.js";
Object.fromEntries = arr => Object.assign({}, ...Array.from(arr, ([k, v]) => ({ [k]: v })));
const input = document.getElementById('input');
const output = document.getElementById('output');
const btn = document.getElementById('convert');
const parser = new Parser();
const getValueFromInput = () => {
    return input ? input.value : '';
};
const getValueFromExample = () => {
    return example.value.toString();
};
let inputValue;
let result;
const convert = () => {
    if (getValueFromInput()) {
        inputValue = getValueFromInput();
    }
    else if (getValueFromExample()) {
        inputValue = getValueFromExample();
    }
    result = parser.convert(inputValue).toString();
    printResult(result);
};
const printResult = (r) => {
    output.value = r;
};
if (btn) {
    btn.onclick = convert;
}
console.log('fix 3');
