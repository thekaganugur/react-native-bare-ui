import React from "react";
import { Button } from "../src";
import Icon from "react-native-vector-icons/FontAwesome";
import ActivityIndicator from "../src/components/restyle/activityIndicator";

const MyIcon = <Icon name="rocket" size={30} color="#900" />;

function Ghost() {
  return (
    <Button
      onPress={console.log}
      isLoading
      backgroundColor="transparent"
      width={undefined}
    >
      {MyIcon}
      <Button.Text textDecorationLine="underline" variant="header">
        Hello
      </Button.Text>
      <ActivityIndicator marginLeft="m" />
    </Button>
  );
}
function ExampleApp() {
  return (
    <>
      <Button onPress={console.log} marginBottom="l">
        <Button.Text color="white" variant="header">
          Hello
        </Button.Text>
      </Button>
      <Ghost />
      <Icon.Button
        name="facebook"
        backgroundColor="#3b5998"
        onPress={console.log}
      >
        Login with Facebook
      </Icon.Button>
    </>
  );
}

export default ExampleApp;
