import React from "react";
import { Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Button, ButtonProps } from "../src";
import Checkbox from "../src/components/checkbox/checkbox";
import useDisclosure from "../src/hooks/use-disclosure";
import ActivityIndicator from "../src/restyle/activity-indicator";
import Box from "../src/restyle/box";

/** With icon and loading support */
function GhostButton(
  props: ButtonProps & { icon?: React.ReactNode; title: string }
) {
  const { icon, title, ...rest } = props;
  return (
    <Button backgroundColor="transparent" width={undefined} {...rest}>
      {icon && <Box mr="m">{icon}</Box>}
      <Button.Text textDecorationLine="underline">{title}</Button.Text>
      {props.isLoading && <ActivityIndicator marginLeft="m" />}
    </Button>
  );
}

function OutlinedButton(props: ButtonProps & { title: string }) {
  const { title, ...rest } = props;
  return (
    <Button
      backgroundColor="transparent"
      borderColor="cyan"
      borderWidth={2}
      {...rest}
    >
      <Button.Text variant="subheader">{title}</Button.Text>
    </Button>
  );
}

function ExampleApp() {
  return (
    <Box width="100%" padding="l">
      <Button
        onPress={() => {
          Alert.alert("Pressed");
        }}
        marginBottom="l"
      >
        <Button.Text color="white" variant="header">
          Hello
        </Button.Text>
      </Button>

      <GhostButton
        onPress={() => {
          Alert.alert("Pressed");
        }}
        title="Foo"
        icon={<Icon name="rocket" size={30} color="#900" />}
        isLoading
        marginBottom="l"
      />
      <OutlinedButton
        onPress={() => {
          Alert.alert("Pressed");
        }}
        title="Foo"
        marginBottom="l"
      />

      <Checkbox onChange={console.log} />
    </Box>
  );
}

export default ExampleApp;
