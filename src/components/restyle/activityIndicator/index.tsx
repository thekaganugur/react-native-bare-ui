import { createBox } from "@shopify/restyle";
import { ActivityIndicator as RCActivityIndicator } from "react-native";
import { Theme } from "../../../theme";

export const ActivityIndicator = createBox<Theme>(RCActivityIndicator);

export default ActivityIndicator;
