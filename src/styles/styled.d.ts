import 'styled-components';
import { defaultTheme } from './Theme';

type StyledDefaultTheme = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends StyledDefaultTheme {}
}
