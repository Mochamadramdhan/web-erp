function manualshort(input) {
    for (let i = 0; i < input.length; i++) {
      for (let j = i + 1; j < input.length; j++) {
        if (input[i] < input[j]) {
          let temp = input[i];
          input[i] = input[j];
          input[j] = temp;
        }
      }
    }
    return input;
  }
  const input = [1, 2, 4, 3, 5, 3, 2, 1];
  const output = manualshort(input);
  console.log(output); 