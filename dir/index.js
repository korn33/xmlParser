import { Parser } from "./Parser.js";
Object.fromEntries = arr => Object.assign({}, ...Array.from(arr, ([k, v]) => ({ [k]: v })));
const input = document.getElementById('input');
const output = document.getElementById('output');
const btn = document.getElementById('convert');
const namespace = document.getElementById('namespace');
const parser = new Parser();
const getValueFromInput = () => {
    return input ? input.value : '';
};
let inputValue;
let result;
const convert = () => {
    inputValue = getValueFromInput();
    if (namespace.value) {
        result = parser.convert(inputValue, namespace.value).toString();
    }
    else {
        result = parser.convert(inputValue).toString();
    }
    printResult(result);
};
const printResult = (r) => {
    output.value = r;
};
if (btn) {
    btn.onclick = convert;
}
console.log('fix 4');
