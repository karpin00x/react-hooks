import { renderHook } from "@testing-library/react-hooks/native";
import useLocalStorage from "../useLocalStorage";
describe("Local storage", () => {
  it("should not crash", () => {
    const { result } = renderHook(() => useLocalStorage());

    expect(result.current).toBeDefined();
  });

  it("should return null after read non existing key", () => {
    const { result } = renderHook(() => useLocalStorage());

    expect(result.current.get("random")).toBeNull();
  });

  it("should return value for existing key", () => {
    const { result } = renderHook(() => useLocalStorage());

    const { get, set } = result.current;

    set({ key: "random", item: "test" });

    expect(get("random")).toEqual("test");
  });

  it("should remove existing item", () => {
    const { result } = renderHook(() => useLocalStorage());

    const { get, set, remove } = result.current;

    set({ key: "random", item: "test" });
    remove("random");

    expect(get("random")).toBeNull();
  });
});
