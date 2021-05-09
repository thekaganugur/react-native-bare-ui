import React from "react";
import { BoxProps } from "../../restyle/box";
import Pressable, { PressableProps } from "../../restyle/pressable";
import Text, { TextProps } from "../../restyle/text";

export interface ButtonProps extends PressableProps {
  isLoading?: boolean;
}
interface ButtonComposition {
  Text: React.FC<TextProps>;
}

const defaultStyleProps: BoxProps = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  backgroundColor: "teal",
  paddingHorizontal: "l",
  paddingVertical: "s",
  borderRadius: "default",
};

export const Button: React.FC<ButtonProps> & ButtonComposition = (
  props: ButtonProps
) => {
  const { onPress, isLoading, ...rest } = props;

  const handleOnPress = React.useCallback(
    (evt) => {
      if (!isLoading && onPress) {
        onPress(evt);
      }
    },
    [isLoading, onPress]
  );

  return <Pressable {...defaultStyleProps} onPress={handleOnPress} {...rest} />;
};

Button.Text = Text;

export default Button;
