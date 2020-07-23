import React from "react";
//import { render } from "@testing-library/react";
import App from "./App";
import { render, screen } from "./custom_render";

const testElement = () => {
  <h2>asdf</h2>;
};

//test("renders learn react link", () => {
//const t = render(testElement);
//getByText(t, "asdf");
//  const { getByText } = render(<App />);
//console.log(getByText);
//  const linkElement = getByText(/learn react/i);
//  expect(linkElement).toBeInTheDocument();
//});

//describe("<App/>", () => {
//  it("renders App correct", () => {
//    const { getByText } = render(<App />);
//    expect(getByText(/this is a test/i)).toBeInTheDocument();
//  });
//});

describe("<App/>", () => {
  it("renders App correct", () => {
    render(<App />);
    expect(getByText(/this is a test/i)).toBeInTheDocument();
  });
});cd 
