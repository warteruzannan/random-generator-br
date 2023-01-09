type weightType =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

export const fonts = {
  FONT_SIZE: 18,
  FONT_REGULAR: '400' as weightType,
  FONT_SEMI_BOLD: '700' as weightType,
};
