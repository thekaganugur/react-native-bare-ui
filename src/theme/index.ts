import { createTheme } from "@shopify/restyle";
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { spacing } from "./spacing";
import {
  ColorProps as RColorProps,
  TextProps as RTextProps,
  BoxProps as RBoxProps,
} from "@shopify/restyle";
import { radii } from "./radius";

export const textVariants = {
  header: {
    // fontFamily: "ShopifySans-Bold",
    fontWeight: "bold",
    fontSize: 34,
    lineHeight: 42.5,
    color: "black",
  },
  subheader: {
    // fontFamily: "ShopifySans-SemiBold",
    fontWeight: "600",
    fontSize: 28,
    lineHeight: 36,
    color: "black",
  },
  bodySm: {
    fontSize: 14,
    lineHeight: 24,
    color: "black",
  },
  body: {
    // fontFamily: "ShopifySans",
    fontSize: 16,
    lineHeight: 24,
    color: "black",
  },
  bodyLg: {
    fontSize: 20,
    lineHeight: 24,
    color: "black",
  },
};

export type Theme = typeof theme;
export type ColorProps = RColorProps<Theme>;
export type TextProps = RTextProps<Theme>;
export type BoxProps = RBoxProps<Theme>;

export const theme = createTheme({
  colors: colors,
  spacing: spacing,
  breakpoints: breakpoints,
  borderRadii: radii,
  textVariants,
});
