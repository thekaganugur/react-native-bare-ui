import { BoxProps as RBoxProps, createBox } from "@shopify/restyle";
import { Theme } from "../../theme";

export type BoxProps = RBoxProps<Theme>;

export const Box = createBox<Theme>();

export default Box;
