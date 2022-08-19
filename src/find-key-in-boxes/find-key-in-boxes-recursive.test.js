import { findKeyInBox } from './find-key-in-boxes-recursive';

describe('findKeyInBox', () => {
  it('finds the key in a set of nested boxes', () => {
    // Box A has three boxes inside it: Box B, Box C, and Box D
    // Box B has nothing inside it
    // Box C has two boxes inside it: Box E and Box F
    // Box E has one box inside it: Box G
    // Box G has the key inside it
    // Box F has nothing inside it
    // Box D one box inside it: Box H
    // Box H has nothing inside it

    const box = {
      type: 'box',
      id: 'A',
      contents: [
        {
          type: 'box',
          id: 'B',
          contents: [],
        },
        {
          type: 'box',
          id: 'C',
          contents: [
            {
              type: 'box',
              id: 'E',
              contents: [
                {
                  type: 'box',
                  id: 'G',
                  contents: [
                    {
                      type: 'key',
                      id: 'Key',
                      contents: [],
                    },
                  ],
                },
              ],
            },
            {
              type: 'box',
              id: 'F',
              contents: [],
            },
          ],
        },
        {
          type: 'box',
          id: 'D',
          contents: [
            {
              type: 'box',
              id: 'H',
              contents: [],
            },
          ],
        },
      ],
    };

    expect(findKeyInBox(box)).toBe('G');
  });

  it('finds the key in a single box', () => {
    const box = {
      type: 'box',
      id: 'A',
      contents: [
        {
          type: 'key',
          id: 'Key',
          contents: [],
        },
      ],
    };

    expect(findKeyInBox(box)).toBe('A');
  });

  it('returns undefined if no key exists', () => {
    const box = {
      type: 'box',
      id: 'A',
      contents: [],
    };

    expect(findKeyInBox(box)).toBe(undefined);
  });
});
