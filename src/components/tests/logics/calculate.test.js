import calculate from '../../logic/calculate';

it('Test Calculate JS', () => {
  const obj = { total: null, next: null, operation: null };
  let answer = calculate(obj, '9');
  answer = calculate(answer, '+');
  answer = calculate(answer, '4');
  answer = calculate(answer, '=');

  expect(answer.total).toBe('13');
});
