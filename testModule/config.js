import _ from 'lodash';
const greeting = "VueJS/Webpack Test";
const apiKey = "abc124";

const _codersName = "Mike Connor";
const _codersUrl = "http://rocketnumber9.org/contact/";
const myList = [
  { text: apiKey },
  { text: "Learn JavaScript" },
  { text: 'Learn Vue' },
  { text: 'Build something awesome' },
  //{ text: `My Lodash stuff -${_.partition([1, 2, 3, 4], n => n % 2)}` }
];
export default greeting;
export {
  myList,
  _codersName as codersName,
  _codersUrl as codersUrl,
 };
//`<strong>Code Test</strong> by <a href="http://rocketnumber9.org/contact/">Mike Connor</a>`;
