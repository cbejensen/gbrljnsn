'use client';

import { Builder, builder, BuilderComponent } from '@builder.io/react';
import { BuilderComponentProps } from '@builder.io/react/dist/types/src/components/builder-component.component';
//  This is an example of registering a custom component to be used in Builder.io.
//  You would typically do this in the file where the component is defined.

builder.init(process.env.NEXT_PUBLIC_BUILDER_IO_KEY as string);

export function BuilderClient(props: BuilderComponentProps) {
  return <BuilderComponent {...props} />;
}

export const MyCustomComponent = (props) => (
  <div>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
  </div>
);

//  This is a minimal example of a custom component, you can view more complex input types here:
//  https://www.builder.io/c/docs/custom-react-components#input-types
Builder.registerComponent(MyCustomComponent, {
  name: 'ExampleCustomComponent',
  inputs: [
    { name: 'title', type: 'string', defaultValue: 'I am a React component!' },
    {
      name: 'description',
      type: 'string',
      defaultValue: 'Find my source in /pages/[...page].js',
    },
  ],
});

// Register a custom insert menu to organize your custom componnets
// https://www.builder.io/c/docs/custom-components-visual-editor#:~:text=than%20this%20screenshot.-,organizing%20your%20components%20in%20custom%20sections,-You%20can%20create
Builder.register('insertMenu', {
  name: 'My Components',
  items: [{ item: 'ExampleCustomComponent', name: 'My React Component' }],
});
