import { createText, TextProps as RTextProps } from "@shopify/restyle";
import { Theme } from "../../theme";

export type TextProps = RTextProps<Theme>;

export const Text = createText<Theme>();

export default Text;
