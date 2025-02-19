import { v4 } from "uuid";

export type Listener<Payload> = {
  callback: (payload: Payload) => void;
  listenerId?: string;
};

export class EventEmitter<Payload> {
  listeners: Listener<Payload>[] = [];

  addListener(listener: Listener<Payload>) {
    if (listener.listenerId) {
      this.listeners.push(listener);
      return listener.listenerId;
    }

    const id = v4();
    this.listeners.push({ ...listener, listenerId: id });
    return id;
  }

  removeListener(eventId: string) {
    this.listeners = this.listeners.filter((ev) => {
      return ev.listenerId != eventId;
    });
  }

  emit(opts: { payload: Payload }) {
    this.listeners.forEach((ev) => {
      ev.callback(opts.payload);
    });
  }
}
