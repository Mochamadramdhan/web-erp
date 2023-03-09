const input1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  };

  const input2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 4}, ee: 'car'}
  };



  function sumgenap(input) {
    let sum = 0;
    for (let i in input) {
      if (typeof input[i] === "object") {
        sum += sumgenap(input[i]);
      } else if (typeof input[i] === "number" && input[i] % 2 === 0) {
        sum += input[i];
      }
    }
    return sum;
  }
  

  console.log(sumgenap(input1));
  console.log(sumgenap(input2));

  