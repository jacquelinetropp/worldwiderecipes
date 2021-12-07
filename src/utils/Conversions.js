export const convertToMetric = (amount, size) => {
  let newAmounts = [];
  let newSizes = [];
  for (let i = 0; i < size.length; i++) {
    if (size === "cups") {
      newAmounts.push(amount * 240);
      newSizes.push("ml");
    } else if (size === "lbs"){
        newAmounts.push(amount * 454);
        newSizes.push('g')
    }
  }
};

export const degreeConversion = (number, degrees) => {
  let newNumber;
  if (degrees === "f") {
    newNumber = (number - 32) / 1.8;
  } else if (degrees === "c") {
    newNumber = number * 1.8 + 32;
  }
};
