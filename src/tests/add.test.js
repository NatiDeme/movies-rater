/**
 * @jest-environment jsdom
 */

import add from '../modules/add.js';

describe('test jest testing library', () => {
  test('test add 20 + 20', () => {
    const sum = add(20, 30);
    expect(sum).toBe(50);
  });
});