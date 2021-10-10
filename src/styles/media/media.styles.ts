import { FlattenSimpleInterpolation } from 'styled-components';
import { Breakpoint, Ruleset } from '~/types';

export const breakpointsSizes = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

export const breakpoints = Object.entries(breakpointsSizes).reduce(
  (acc, [key, value]) => {
    return { ...acc, [key]: `@media (min-width: ${value}px)` };
  },
  {} as { [k in keyof typeof breakpointsSizes]: string }
);

export const mediaStyles = (
  key: Breakpoint,
  value: string | FlattenSimpleInterpolation
) => {
  return `${breakpoints[key]} { ${value}; }`;
};

export const mediaList = (ruleset: Ruleset) => {
  return (Object.keys(ruleset) as Breakpoint[]).reduce((css, key) => {
    if (key === 'xs') {
      return `${css} ${ruleset[key]};`;
    }
    return `${css} ${breakpoints[key]} { ${ruleset[key]}; }`;
  }, '');
};

const formatAlignValue = (
  prop: 'align-items' | 'justify-content',
  value: string | Ruleset | undefined
) => {
  if (value === 'start' || value === 'end') {
    return `${prop}: flex-${value}`;
  }
  if (value === 'between' || value === 'around') {
    return `${prop}: space-${value}`;
  }
  if (value === 'center') {
    return `${prop}: ${value}`;
  }
  return;
};

export const mediaProperty = (
  prop: string,
  rule: string | Ruleset | undefined
) => {
  if (typeof rule === 'object') {
    return mediaList(
      (Object.keys(rule) as Breakpoint[]).reduce((acc, key) => {
        acc[key] = mediaProperty(prop, rule[key]) as string;
        return acc;
      }, {} as Record<Breakpoint, string>)
    );
  }
  if (prop === 'align-items' || prop === 'justify-content') {
    return formatAlignValue(prop, rule);
  }
  if (typeof rule === 'string') {
    return `${prop}: ${rule}`;
  }
};
