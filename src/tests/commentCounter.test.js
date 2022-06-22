/**
 * @jest-environment jsdom
 */

import commentCounter from '../modules/commentCounter.js';

describe('test comments calculation function', () => {
  test('test number of comment', async () => {
    const sum = await commentCounter(139);
    expect(sum).toBe(2);
  });
});