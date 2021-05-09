import { ColorProps as RColorProps, createTheme } from "@shopify/restyle";
import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { radii } from "./radius";
import { spacing } from "./spacing";

export type Theme = typeof theme;
export type ColorProps = RColorProps<Theme>;

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

export const theme = createTheme({
  colors: colors,
  spacing: spacing,
  breakpoints: breakpoints,
  borderRadii: radii,
  textVariants,
});
