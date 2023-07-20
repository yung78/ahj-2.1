import Parse from './Parse.js';
import * as data from '../data/data.json';

const parse = new Parse(data);
parse.createDomElements();
parse.rotationShow();
