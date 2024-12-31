type HeadingsPos = 1 | 2 | 3 | 4 | 5 | 6;
type Headings = `h-${HeadingsPos}`;
type Sizes = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
enum Weights {
  'light' = 300,
  'regular' = 400,
  'medium' = 500,
  'semibold' = 600,
  'bold' = 700,
  'extrabold' = 800,
  'black' = 900,
}
export type Typography = `body-${Sizes}-${Weights.black}`;
