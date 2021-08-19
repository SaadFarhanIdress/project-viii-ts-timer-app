import { shallow } from "enzyme";
import Timer from "./Timer";

describe("it should render the DisplayComponent", () => {
  const container = shallow(<Timer />);

  it("should render div", () => {
    expect(container.find("div").length).toEqual(3);
  });
});
