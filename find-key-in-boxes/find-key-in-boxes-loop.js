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

const findKeyInBox = (box) => {
  const pile = [];
  pile.push(box);

  while (pile.length > 0) {
    const currentBox = pile.pop();
    console.log(`Looking in Box ${currentBox.id}`);

    for (let i = 0; i < currentBox.contents.length; i++) {
      if (currentBox.contents[i].type === 'key') {
        return console.log(`Found the key in Box ${currentBox.id}!`);
      }

      if (currentBox.contents[i].type === 'box') {
        console.log(
          `Found Box ${currentBox.contents[i].id} in Box ${currentBox.id}`
        );
        pile.push(currentBox.contents[i]);
      }
    }
  }
};
