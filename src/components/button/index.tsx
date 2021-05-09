import { createBox } from "@shopify/restyle";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { BoxProps, TextProps, Theme } from "../../theme";
import Text from "../restyle/text";

type BaseProps = TouchableOpacityProps & { children: React.ReactNode };
type ButtonProps = BoxProps & BaseProps;
interface ButtonComposition {
  Text: React.FC<TextProps>;
}

const BoxTouchableOpacity = createBox<Theme, BaseProps>(TouchableOpacity);

const defaultStyleProps: Omit<ButtonProps, "children"> = {
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  backgroundColor: "teal",
  paddingHorizontal: "l",
  paddingVertical: "s",
  activeOpacity: 0.6,
};

export const Button: React.FC<ButtonProps> & ButtonComposition = (
  props: ButtonProps
) => <BoxTouchableOpacity {...defaultStyleProps} {...props} />;

Button.Text = Text;

export default Button;
