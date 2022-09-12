// adds commas to numbers
export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// change affix string from 4 affixes to 3
export const threeAffix = (x: string) => x.split(",").slice(0, 3).join(", ");
