import changeHole from '../app';

test('check - 1 class', () => {
  changeHole();
  const activeElements = document.querySelectorAll('.hole_has-goblin');
  const result = Array.from(activeElements).length;
  expect(result).toBe(0);
});
