import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    setSearchResults: jest.fn()
  }

  it("renders correctly", () => {
    const { asFragment } = render(<Search setSearchResults={validProps.setSearchResults} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("button displays the correct text", () => {
    render(<Search setSearchResults={validProps.setSearchResults} />)

    const button = screen.getAllByRole("button");

    expect(button).toHaveLength(1);
  })
});