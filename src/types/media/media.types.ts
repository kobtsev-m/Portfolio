import { breakpoints } from '~/styles';

export type Breakpoint = keyof typeof breakpoints;

export type Ruleset<T extends string = string> = {
  [k in Breakpoint]?: T;
};
