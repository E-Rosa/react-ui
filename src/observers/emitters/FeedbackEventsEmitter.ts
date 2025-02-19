import {
  FeedbackErrorEvent,
  FeedbackErrorEventPayload,
  FeedbackLoadingEvent,
  FeedbackLoadingEventPayload,
  FeedbackSuccessEvent,
  FeedbackSuccessEventPayload,
} from "../events/FeedbackEvents";

export class FeedbackEventsEmitter {
  static readonly eventBus = new EventTarget();

  static emitSuccess(payload: FeedbackSuccessEventPayload) {
    const event = new FeedbackSuccessEvent(payload);

    this.eventBus.dispatchEvent(event);
    return event;
  }

  static emitError(payload: FeedbackErrorEventPayload) {
    const event = new FeedbackErrorEvent(payload);

    this.eventBus.dispatchEvent(event);
    return event;
  }

  static emitLoading(payload: FeedbackLoadingEventPayload) {
    const event = new FeedbackLoadingEvent(payload);

    this.eventBus.dispatchEvent(event);
    return event;
  }
}
export function toastSuccess(opts: FeedbackSuccessEventPayload) {
  FeedbackEventsEmitter.emitSuccess(opts);
}

export function toastError(opts: FeedbackErrorEventPayload) {
  FeedbackEventsEmitter.emitError(opts);
}

export function toastLoading(opts: FeedbackLoadingEventPayload) {
  FeedbackEventsEmitter.emitLoading(opts);
}
