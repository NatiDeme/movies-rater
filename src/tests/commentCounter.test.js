/**
 * @jest-environment jsdom
 */

import commentCounter from '../modules/commentCounter.js';

global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve([
    {
      creation_date: '2022-06-22',
      comment: 'Girls movie',
      username: 'Nati',
    },
    {
      creation_date: '2022-06-22',
      comment: 'Girls movie',
      username: 'Nati',
    },
    {
      creation_date: '2022-06-22',
      comment: 'Girls movie',
      username: 'Nati',
    },
  ]),
}));

describe('test comments calculation function', () => {
  test('test number of comment', async () => {
    const sum = await commentCounter(139);
    expect(sum).toBe(3);
  });
});