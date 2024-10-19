function runTests() {
  let problems = [
    testProblemOne(),
    testProblemTwo(),
    testProblemThree(),
    testProblemFour(),
  ];

  addProblemsToHTML(problems, problems.length, Math.ceil(problems.length / 2));
}

function testProblemOne() {
  let description = `Average the values of an grades documents. Return value with only 1 decimal place.`;

  let example = `problemOne({CS230: 95, CS250: 89, CS133: 91}) should return 91.7`;

  let tests = [
    {
      input: `{CS230: 95, CS250: 89, CS133: 91}`,
      expected: 91.7,
      actual: problemOne({ CS230: 95, CS250: 89, CS133: 91 }),
    },
    {
      input: `{CS230: 95, CS250: 89, CS133: ''}`,
      expected: 92,
      actual: problemOne({ CS230: 95, CS250: 89, CS133: "" }),
    },
    {
      input: `{CS230: 95, CS250: 89, CS133: -1}`,
      expected: 92,
      actual: problemOne({ CS230: 95, CS250: 89, CS133: -1 }),
    },
    {
      input: `{'CalcI': 95, 'CalcII': 89, 'CalcIII': 71}`,
      expected: 85,
      actual: problemOne({ CalcI: 95, CalcII: 89, CalcIII: 71 }),
    },
    {
      input: `{CS230: '', CS250: '', CS133: ''}`,
      expected: undefined,
      actual: problemOne({ CS230: "", CS250: "", CS133: "" }),
    },
    { input: `{}`, expected: undefined, actual: problemOne({}) },
  ];

  return { description, example, tests };
}

function testProblemTwo() {
  let description = `Convert an object to an array, 
    where the keys are the first element in each subarray, 
    and the values are the second element.`;

  let example = `problemTwo({a: 1, b: 2, c: 3}) should return [['a', 1], ['b', 2], ['c', 3]]`;

  let tests = [
    {
      input: `{a: 1, b: 2, c: 3}`,
      expected: [
        ["a", 1],
        ["b", 2],
        ["c", 3],
      ],
      actual: problemTwo({ a: 1, b: 2, c: 3 }),
    },
    {
      input: `{'a': 1, 'b': 2, 'c': 3}`,
      expected: [
        ["a", 1],
        ["b", 2],
        ["c", 3],
      ],
      actual: problemTwo({ a: 1, b: 2, c: 3 }),
    },
    {
      input: `{a: 1, b: 2, c: {d: 3}}`,
      expected: [
        ["a", 1],
        ["b", 2],
        ["c", ["d", 3]],
      ],
      actual: problemTwo({ a: 1, b: 2, c: { d: 3 } }),
    },
  ];

  return { description, example, tests };
}

function testProblemThree() {
  let description = `You are given a hand of five playing cards.
    Each card is represented as an object with a suit and a value`;

  let example = `problemThree([
        {suit: 'clubs', value: 10}, 
        {suit: 'clubs', value: 9}, 
        {suit: 'clubs', value: 8}, 
        {suit: 'clubs', value: 7},
        {suit: 'clubs', value: 'J'}]) should return 'straight flush'`;

  let tests = [
    {
      input: `[
                {suit: 'clubs', value: 10}, 
                {suit: 'clubs', value: 9}, 
                {suit: 'clubs', value: 8}, 
                {suit: 'clubs', value: 7}, 
                {suit: 'clubs', value: 'J'}]`,
      expected: "straight flush",
      actual: problemThree([
        { suit: "clubs", value: 10 },
        { suit: "clubs", value: 9 },
        { suit: "clubs", value: 8 },
        { suit: "clubs", value: 7 },
        { suit: "clubs", value: "J" },
      ]),
    },
    {
      input: `[
                {suit: 'clubs', value: 10},
                {suit: 'diamonds', value: 6},
                {suit: 'hearts', value: 10},
                {suit: 'spades', value: 10},
                {suit: 'diamonds', value: 10}]`,
      expected: "four of a kind",
      actual: problemThree([
        { suit: "clubs", value: 10 },
        { suit: "diamonds", value: 6 },
        { suit: "hearts", value: 10 },
        { suit: "spades", value: 10 },
        { suit: "diamonds", value: 10 },
      ]),
    },
    {
      input: `[
                {suit: 'clubs', value: 6},
                {suit: 'diamonds', value: 10},
                {suit: 'hearts', value: 10},
                {suit: 'spades', value: 6},
                {suit: 'clubs', value: 10}]`,
      expected: "full house",
      actual: problemThree([
        { suit: "clubs", value: 6 },
        { suit: "diamonds", value: 10 },
        { suit: "hearts", value: 10 },
        { suit: "spades", value: 6 },
        { suit: "clubs", value: 10 },
      ]),
    },
    {
      input: `[
                {suit: 'clubs', value: 'K'},
                {suit: 'clubs', value: 9},
                {suit: 'clubs', value: 8},
                {suit: 'clubs', value: 4},
                {suit: 'clubs', value: 3}]`,
      expected: "flush",
      actual: problemThree([
        { suit: "clubs", value: "K" },
        { suit: "clubs", value: 9 },
        { suit: "clubs", value: 8 },
        { suit: "clubs", value: 4 },
        { suit: "clubs", value: 3 },
      ]),
    },
    {
      input: `[
                {suit: 'clubs', value: 'A'},
                {suit: 'diamonds', value: 2},
                {suit: 'hearts', value: 5},
                {suit: 'spades', value: 3},
                {suit: 'clubs', value: 4}]`,
      expected: "straight",
      actual: problemThree([
        { suit: "clubs", value: "A" },
        { suit: "diamonds", value: 2 },
        { suit: "hearts", value: 5 },
        { suit: "spades", value: 3 },
        { suit: "clubs", value: 4 },
      ]),
    },
    {
      input: `[
                {suit: 'clubs', value: 'A'},
                {suit: 'diamonds', value: 10},
                {suit: 'hearts', value: 'K'},
                {suit: 'spades', value: 'Q'},
                {suit: 'clubs', value: 'J'}]`,
      expected: "straight",
      actual: problemThree([
        { suit: "clubs", value: "A" },
        { suit: "diamonds", value: 10 },
        { suit: "hearts", value: "K" },
        { suit: "spades", value: "Q" },
        { suit: "clubs", value: "J" },
      ]),
    },
    {
      input: `[
                {suit: 'clubs', value: 10},
                {suit: 'diamonds', value: 6},
                {suit: 'hearts', value: 10},
                {suit: 'spades', value: 10},
                {suit: 'diamonds', value: 2}]`,
      expected: "three of a kind",
      actual: problemThree([
        { suit: "clubs", value: 10 },
        { suit: "diamonds", value: 6 },
        { suit: "hearts", value: 10 },
        { suit: "spades", value: 10 },
        { suit: "diamonds", value: 2 },
      ]),
    },
    {
      input: `[
                {suit: 'clubs', value: 10},
                {suit: 'diamonds', value: 6},
                {suit: 'hearts', value: 10},
                {suit: 'spades', value: 6},
                {suit: 'diamonds', value: 2}]`,
      expected: "two pair",
      actual: problemThree([
        { suit: "clubs", value: 10 },
        { suit: "diamonds", value: 6 },
        { suit: "hearts", value: 10 },
        { suit: "spades", value: 6 },
        { suit: "diamonds", value: 2 },
      ]),
    },
    {
      input: `[
                {suit: 'clubs', value: 10},
                {suit: 'diamonds', value: 6},
                {suit: 'hearts', value: 10},
                {suit: 'spades', value: 4},
                {suit: 'diamonds', value: 2}]`,
      expected: "one pair",
      actual: problemThree([
        { suit: "clubs", value: 10 },
        { suit: "diamonds", value: 6 },
        { suit: "hearts", value: 10 },
        { suit: "spades", value: 4 },
        { suit: "diamonds", value: 2 },
      ]),
    },
    {
      input: `[
                {suit: 'clubs', value: 10},
                {suit: 'diamonds', value: 6},
                {suit: 'hearts', value: 5},
                {suit: 'spades', value: 4},
                {suit: 'diamonds', value: 2}]`,
      expected: "high card",
      actual: problemThree([
        { suit: "clubs", value: 10 },
        { suit: "diamonds", value: 6 },
        { suit: "hearts", value: 5 },
        { suit: "spades", value: 4 },
        { suit: "diamonds", value: 2 },
      ]),
    },
  ];

  return { description, example, tests };
}
function testProblemFour() {
  let description = `Check if two objects are equal in keys and values. 
    This has to handle deeply nested objects.`;

  let example = `problemFour({a: 1}, {a: 1}) should return true`;

  let tests = [
    { input: `{}, {}`, expected: true, actual: problemFour({}, {}) },
    {
      input: `{a: 1}, {a: 1}`,
      expected: true,
      actual: problemFour({ a: 1 }, { a: 1 }),
    },
    {
      input: `{a: 1, b: 2, c: 3}, {'a': 1, 'b': 2, 'c': 3}`,
      expected: true,
      actual: problemFour({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 }),
    },
    {
      input: `{a: 1, b: 2, c: 3}, {a: 1, b: 2}`,
      expected: false,
      actual: problemFour({ a: 1, b: 2, c: 3 }, { a: 1, b: 2 }),
    },
    {
      input: `{a: 1, b: {c: 3, d: 4}}`,
      expected: true,
      actual: problemFour({ a: 1, b: { c: 3, d: 4 } }),
    },
    {
      input: `{a: 1, b: {c: 3, d: 4}}, {a: 1, b: {c: 3, d: 5}}`,
      expected: false,
      actual: problemFour(
        { a: 1, b: { c: 3, d: 4 } },
        { a: 1, b: { c: 3, d: 5 } }
      ),
    },
    {
      input: `{a: 1, b: {c: 3, d: {e: 5}}}, {a: 1, b: {c: 3, d: {e: 5}}}`,
      expected: true,
      actual: problemFour(
        { a: 1, b: { c: 3, d: { e: 5 } } },
        { a: 1, b: { c: 3, d: { e: 5 } } }
      ),
    },
  ];

  return { description, example, tests };
}

function addProblemsToHTML(problems, numberOfProblems, numberOfRows) {
  let container = document.getElementById("problems");

  for (let i = 0; i < numberOfRows; i++) {
    let row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);

    for (let j = 0; j < 2; j++) {
      let problemNumber = i * 2 + j + 1;
      if (problemNumber <= numberOfProblems) {
        let card = document.createElement("div");
        card.className = "card";
        row.appendChild(card);

        let cardHeading = document.createElement("h2");
        cardHeading.className = "card-heading";
        cardHeading.innerText = "Problem " + problemNumber;
        card.appendChild(cardHeading);

        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        card.appendChild(cardBody);

        let problemDescription = document.createElement("p");
        problemDescription.className = "problem-description";
        problemDescription.innerText = problems[problemNumber - 1].description;
        cardBody.appendChild(problemDescription);

        let problemExample = document.createElement("p");
        problemExample.className = "problem-example";
        problemExample.innerHTML = `<span class='example'>Example: </span>${
          problems[problemNumber - 1].example
        }`;
        cardBody.appendChild(problemExample);

        let problemTests = document.createElement("div");
        problemTests.className = "problem-tests";
        cardBody.appendChild(problemTests);

        for (let k = 0; k < problems[problemNumber - 1].tests.length; k++) {
          let test = document.createElement("li");
          test.className = "problem-test";
          let parameters = document.createElement("p");
          parameters.className = "test-parameters";
          parameters.innerHTML = `<span class='parameter'>Test Parameter: </span>${
            problems[problemNumber - 1].tests[k].input
          }`;
          test.appendChild(parameters);

          let results = document.createElement("p");
          results.className = "test-results";
          results.innerHTML = `<span class='expected'>Expected: </span>${
            problems[problemNumber - 1].tests[k].expected
          } &nbsp;&nbsp;&nbsp;&nbsp;
                    <span class='actual'>Actual: </span>${
                      problems[problemNumber - 1].tests[k].actual
                    }`;
          test.appendChild(results);
          problemTests.appendChild(test);

          let expected = problems[problemNumber - 1].tests[k].expected;
          let actual = problems[problemNumber - 1].tests[k].actual;

          if (Array.isArray(expected) && Array.isArray(actual)) {
            if (expected.length === actual.length) {
              isSame = true;
              actual.forEach((item, index) => {
                if (item !== expected[index]) {
                  isSame = false;
                }
              });
              if (isSame) {
                test.className += " test-pass";
              }
            }
          } else if (
            problems[problemNumber - 1].tests[k].expected ===
            problems[problemNumber - 1].tests[k].actual
          ) {
            test.className += " test-pass";
          }
        }
      }
    }
  }
}
