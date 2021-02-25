import React from "react";
import Button from "./index";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    // assigns the argTypes to the Colors category
    withIcon: { control: "boolean", table: { category: "Boolean" } },
    // assigns the argType to the Text category
    text: { control: "text", table: { category: "Text" } },
    // assigns the argType to the Sizes category
    variant: { table: { category: "Sizes" } },
  },
};
// some function to demonstrate the behavior
const changeHandler = (someValue) => {
  return `${someValue}`;
};
export const CustomizeButtonStory = (args) => {
  // destructure the label from the args object
  const { text } = args;
  // // assigns the function result to a variable and pass it as a prop into the component
  const functionResult = changeHandler(text);
  return <Button {...args} text={functionResult} />;
};
export const Primary = () => <Button variant="primary" withIcon={false} text="primary"></Button>;
export const IconPrimary = () => (
  <Button variant="primary" withIcon={true} iconName="plus" text="Icon Button"></Button>
);
export const Link = () => <Button variant="link" text="Link"></Button>;
export const IconLink = () => (
  <Button variant="link" withIcon={true} iconName="plus" text="Icon Link"></Button>
);
export const Outline = () => <Button variant="secondary" text="Outline Button"></Button>;
export const IconOutline = () => (
  <Button variant="secondary" withIcon={true} iconName="plus" text="Icon Outline"></Button>
);
export const IconRightOutline = () => (
  <Button
    variant="secondary"
    withIcon={true}
    iconName="plus"
    iconPosition="right"
    text="Right Icon Outline"
  ></Button>
);
export const SmallIconPrimary = () => (
  <Button variant="primary" withIcon={true} iconName="plus"></Button>
);
export const SmallIconSecondary = () => (
  <Button variant="secondary" withIcon={true} iconName="plus"></Button>
);
export const SmallIconLink = () => <Button variant="link" withIcon={true} iconName="plus"></Button>;
