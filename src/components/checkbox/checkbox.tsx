import { createBox } from "@shopify/restyle";
import React, { createContext } from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import useDisclosure from "../../hooks/use-disclosure";
import Box, { BoxProps } from "../../restyle/box";
import createIcon from "../../restyle/icon";
import Pressable from "../../restyle/pressable";
import Text, { TextProps } from "../../restyle/text";

interface CheckBoxProps {
  isChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
  onBlur?: () => void;
  defaultIsChecked?: boolean;
  isError?: boolean;
  colorError?: string;
}
interface ButtonComposition {
  Text: React.FC<TextProps>;
}

const defaultStyleProps: BoxProps = {
  alignItems: "center",
  justifyContent: "center",
  height: 24,
  width: 24,
  borderWidth: 1,
  borderColor: "teal",
  borderRadius: "default",
  marginRight: "m",
};

const { Provider } = createContext(null);

export const Checkbox = (props: CheckBoxProps) => {
  const {
    defaultIsChecked,
    isChecked,
    onChange,
    onBlur,
    colorError,
    isError,
  } = props;
  const { isOpen, onToggle } = useDisclosure(isChecked ?? defaultIsChecked);
  const IconBox = createIcon(Icon);

  const handlePress = () => {
    const isControlled = isChecked !== undefined;

    onBlur && onBlur();
    onChange && onChange(!isOpen);
    !isControlled && onToggle();
  };

  const icon = <IconBox name="check" color="teal" size={14} />;

  return (
    <Box flexDirection="row" alignItems="center">
      <Pressable {...defaultStyleProps} onPress={handlePress}>
        {isOpen && icon}
      </Pressable>
      <Text style={{ flexShrink: 1 }} onPress={handlePress}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        inventore quod labore corporis tenetur, quis porro, maiores adipisci
        quae fugiat, nemo quaerat enim asperiores impedit cumque eveniet
        necessitatibus nulla sunt?
      </Text>
    </Box>
  );
};

export default Checkbox;
