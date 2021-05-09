import React from "react";
import { Button } from "../src";

function Ghost() {
  return (
    <Button
      onPress={console.log}
      backgroundColor="transparent"
      width={undefined}
      // alignSelf="center"
    >
      <Button.Text textDecorationLine="underline" variant="header">
        Hello
      </Button.Text>
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
    </>
  );
}

export default ExampleApp;
