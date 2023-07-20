import Parse from '../js/Parse.js';
import '@testing-library/jest-dom';

document.body.innerHTML = `
  <main class="content">
    <div class="table">
        <table class="container">
            <tr class="titles">
                <th>id</th>
                <th>title</th>
                <th>year</th>
                <th>imdb</th>
            </tr>
        </table>
    </div>
  </main>
`;

const data = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

test('Parse.createDomElements()', () => {
  const parse = new Parse(data);
  parse.createDomElements();

  const result1 = parse.trArry.length;
  const result2 = parse.data.length;

  expect(result1).toBe(5);
  expect(result2).toBe(5);
});

test('Parse.rotationShow()', () => {
  const parse = new Parse(data);
  parse.createDomElements();
  jest.useFakeTimers();

  parse.rotationShow();
  jest.runOnlyPendingTimers();
  jest.runOnlyPendingTimers();
  jest.runOnlyPendingTimers();
  jest.runOnlyPendingTimers();
  jest.runOnlyPendingTimers();
  jest.runOnlyPendingTimers();
  jest.runOnlyPendingTimers();
  jest.runOnlyPendingTimers();
  jest.runOnlyPendingTimers();

  const result3 = parse.tableHeaders[0].className;

  expect(result3).toBe('filtered');
});
