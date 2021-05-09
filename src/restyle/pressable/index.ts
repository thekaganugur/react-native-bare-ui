import { createBox } from "@shopify/restyle";
import {
  PressableProps as RNPressableProps,
  Pressable as RNPressable,
} from "react-native";
import { Theme } from "../../theme";
import { BoxProps } from "../box";

export type PressableProps = RNPressableProps & BoxProps;

export const Pressable = createBox<Theme, RNPressableProps>(RNPressable);

export default Pressable;
