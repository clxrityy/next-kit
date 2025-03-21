import { expect, test } from "vitest";
import { Image } from  "../../package/components";
import React from "react";
import { render } from "@testing-library/react";

test("Image component should render correctly", () => {
  const imageProps = {
    src: "https://example.com/image.jpg",
    width: 100,
    height: 100,
    alt: "Example Image",
    priority: true,
  };

  const TestImage = () => {
    return <Image {...imageProps} />;
  }

  const { findByAltText } = render(<TestImage />);

  expect(findByAltText("Example Image")).toBeTruthy();
});
