import { shallowMount } from "@vue/test-utils";
// import HelloWorld from "@/components/HelloWorld.vue";
import CourseItem from "@/components/CourseItem.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    // const msg = "new message";
    // const wrapper = shallowMount(HelloWorld, {
    //   props: { msg },
    // });
    // expect(wrapper.text()).toMatch(msg);
  });
});
describe("CourseItem.vue", () => {
  it("shows the button when isAdded is true", () => {
    const wrapper = shallowMount(CourseItem);
    expect(wrapper.find("button").text()).toBe("Add Course");
  });
});

it("hides the button when isAdded is false", async () => {
  const buttonText = "Remove Course";
  const wrapper = shallowMount(CourseItem);
  await wrapper.setData({ isAdded: true });
  expect(wrapper.find("button").text()).toBe(buttonText);
});
