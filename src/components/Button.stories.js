import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import "./Button.css";

storiesOf("Button", module)
  .add("Small", () => <Button size="small">Small Button</Button>)
  .add("Medium", () => <Button>Medium Button</Button>)
  .add("Large", () => <Button size="large">Large Button</Button>)
  .add("Primary", () => <Button color="primary">Primary Button</Button>)
  .add("Secondary", () => <Button color="secondary">Secondary Button</Button>)
  .add("Text", () => (
    <Button className="Button_Link" color="Text">
      Text Button
    </Button>
  ));
