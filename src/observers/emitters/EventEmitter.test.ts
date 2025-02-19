import { afterEach, describe, expect, jest, test } from "@jest/globals";
import { EventEmitter } from "./EventEmitter";

const mockCallback = jest.fn(() => {});
afterEach(() => {
  mockCallback.mockClear();
});

describe("EventEmitter", () => {
  test("addListener() should add listener to listeners array.", () => {
    const emitter = new EventEmitter();
    emitter.addListener({
      callback: () => {},
    });

    expect(emitter.listeners.length).toBe(1);
    expect(emitter.listeners[0]).toBeTruthy();
    expect(emitter.listeners[0].listenerId).toBeTruthy();
  });

  test("addListener() should return listenerId.", () => {
    const emitter = new EventEmitter();
    const listenerId = emitter.addListener({
      callback: () => {},
    });

    expect(emitter.listeners[0].listenerId).toBeTruthy();
    expect(typeof listenerId).toBe("string");
  });

  test("removeListener() should remove listener from array.", () => {
    const emitter = new EventEmitter();
    const listenerId = emitter.addListener({
      callback: () => {},
    });
    emitter.removeListener(listenerId);

    expect(emitter.listeners[0]).toBe(undefined);
  });

  test("emit() should run all callbacks.", () => {
    const emitter = new EventEmitter();
    emitter.addListener({
      callback: mockCallback,
    });
    emitter.emit({
      payload: undefined,
    });
    expect(emitter.listeners[0].callback).toHaveBeenCalledTimes(1);
  });

  test("Payload should be the same when emitting and adding listener.", () => {
    const emitter = new EventEmitter<{ message: string }>();
    const payload = { message: "Success!" };
    const mockCallbackWithPayload = jest.fn((payload: { message: string }) => {
      console.log("Received payload is: ", payload.message);
    });
    emitter.addListener({
      callback: mockCallbackWithPayload,
    });
    emitter.emit({
      payload: payload,
    });
    
    expect(emitter.listeners[0].callback).toHaveBeenCalledWith(payload);
  });
});
