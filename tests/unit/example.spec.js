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
  it("shows default props name", () => {
    const wrapper = shallowMount(CourseItem);
    expect(wrapper.find("h2").text()).toBe("Course Name");
  });
  it("shows default props description", () => {
    const wrapper = shallowMount(CourseItem);
    expect(wrapper.find("p").text()).toBe(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis accusantium modi adipisci rem architecto sequi atque mollitia voluptates magnam assumenda at reiciendis aliquid, iusto ab debitis quibusdam molestiae quas commodi?"
    );
  });
  it("shows default props credits", () => {
    const wrapper = shallowMount(CourseItem);
    expect(wrapper.find("li").text()).toBe("credits : 0");
  });

  it("renders props name when passed", () => {
    const course = {
      name: "Vue.js",
      description: "The Progressive JavaScript Framework",
      hours: 50,
      credits: 3,
      location: "Online",
      instructor: "John Doe",
      id: 1,
      enrollment: 10,
    };
    const wrapper = shallowMount(CourseItem, {
      props: { course },
    });
    expect(wrapper.find("h2").text()).toBe("Vue.js");
  });

  it("shows the button when isAdded is false", () => {
    const wrapper = shallowMount(CourseItem);
    expect(wrapper.find("button").text()).toBe("Add Course");
  });

  it("hides the button when isAdded is true", async () => {
    const buttonText = "Remove Course";
    const wrapper = shallowMount(CourseItem);
    await wrapper.setData({ isAdded: true });
    expect(wrapper.find("button").text()).toBe(buttonText);
  });

  it("emits an event when the button is clicked", async () => {
    const wrapper = shallowMount(CourseItem);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().addCourse).toBeTruthy();
  });

  it("shows the button Remove Course when isAdded is true", async () => {
    const wrapper = shallowMount(CourseItem);
    await wrapper.setData({ isAdded: true });
    expect(wrapper.find("button").text()).toBe("Remove Course");
  });

  it("emits when the remove button is clicked", async () => {
    const wrapper = shallowMount(CourseItem);
    await wrapper.setData({ isAdded: true });
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().removeCourse).toBeTruthy();
  });
});
