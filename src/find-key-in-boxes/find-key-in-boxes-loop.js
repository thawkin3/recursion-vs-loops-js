export const findKeyInBox = (box) => {
  const pile = [];
  pile.push(box);

  while (pile.length > 0) {
    const currentBox = pile.pop();
    console.log(`Looking in Box ${currentBox.id}`);

    for (let i = 0; i < currentBox.contents.length; i++) {
      if (currentBox.contents[i].type === 'key') {
        console.log(`Found the key in Box ${currentBox.id}!`);
        return currentBox.id;
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
