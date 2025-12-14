//Decimal to Octal Conversion
function DtoO(value) {
  let octal = [];
  if (value == 0) {
    octal.unshift(0);
  }
  while (value > 0) {
    let i = value % 8;
    octal.unshift(i);
    value = Math.floor(value / 8);
  }
  return octal.join("");
}

//Decimal to Binary Conversion
function DtoB(value) {
  let binary = [];
  if (value == 0) {
    binary.unshift(0);
  }
  while (value > 0) {
    let i = value % 2;
    binary.unshift(i);
    value = Math.floor(value / 2);
  }
  return binary.join("");
}

//Decimal to Hexadecimal
function DtoH(value) {
  let hexade = [];
  if (value == 0) {
    hexade.unshift(0);
  }
  while (value > 0) {
    let i = value % 16;
    switch (i) {
      case 10:
        hexade.unshift("A");
        break;
      case 11:
        hexade.unshift("B");
        break;
      case 12:
        hexade.unshift("C");
        break;
      case 13:
        hexade.unshift("D");
        break;
      case 14:
        hexade.unshift("E");
        break;
      case 15:
        hexade.unshift("F");
        break;
      default:
        hexade.unshift(i);
    }
    value = Math.floor(value / 16);
  }
  return hexade.join("");
}
export { DtoB, DtoO, DtoH };
