import { createBox } from "@shopify/restyle";
import React from "react";
import {
  GestureResponderEvent,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { BoxProps, TextProps, Theme } from "../../theme";
import Text from "../restyle/text";

type BaseProps = Omit<TouchableOpacityProps, "onPress"> & {
  onPress: (event: GestureResponderEvent) => void;
  children: React.ReactNode;
  /** Disables onPress if true */
  isLoading?: boolean;
};
type ButtonProps = BoxProps & BaseProps;
interface ButtonComposition {
  Text: React.FC<TextProps>;
}

const BoxTouchableOpacity = createBox<Theme, BaseProps>(TouchableOpacity);

const defaultStyleProps: BoxProps = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  backgroundColor: "teal",
  paddingHorizontal: "l",
  paddingVertical: "s",
};

export const Button: React.FC<ButtonProps> & ButtonComposition = (
  props: ButtonProps
) => {
  const { onPress, isLoading, ...rest } = props;

  const handleOnPress = React.useCallback(
    (evt) => {
      if (!isLoading) {
        onPress(evt);
      }
    },
    [isLoading, onPress]
  );

  return (
    <BoxTouchableOpacity
      activeOpacity={0.6}
      {...defaultStyleProps}
      onPress={handleOnPress}
      {...rest}
    />
  );
};

Button.Text = Text;

export default Button;
