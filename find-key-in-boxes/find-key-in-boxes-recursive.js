export const findKeyInBox = (box) => {
  console.log(`Looking in Box ${box.id}`);

  for (let i = 0; i < box.contents.length; i++) {
    if (box.contents[i].type === 'key') {
      console.log(`Found the key in Box ${box.id}!`);
      return box.id;
    }

    if (box.contents[i].type === 'box') {
      console.log(`Found Box ${box.contents[i].id} in Box ${box.id}`);
      const boxContainingKey = findKeyInBox(box.contents[i]);

      if (boxContainingKey) {
        return boxContainingKey;
      }
    }
  }
};
