import { createBox } from "@shopify/restyle";
import {
  ActivityIndicator as RCActivityIndicator,
  RCActivityIndicatorProps,
} from "react-native";
import { Theme } from "../../theme";
import { BoxProps } from "../box";

export type ActivityIndicatorProps = RCActivityIndicatorProps & BoxProps;

export const ActivityIndicator = createBox<Theme, RCActivityIndicatorProps>(
  RCActivityIndicator
);

export default ActivityIndicator;
