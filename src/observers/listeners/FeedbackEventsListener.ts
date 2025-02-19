import { FeedbackEventsEmitter } from "../emitters/FeedbackEventsEmitter";

export class FeedbackEventsListener {
  static emitter = FeedbackEventsEmitter.eventBus;
  static onError: (() => void) | null = null;
  static onSuccess: (() => void) | null = null;
  static onLoading: (() => void) | null = null;

  static removeListeners() {
    this.emitter.removeEventListener("success", this.onSuccess);
    this.emitter.removeEventListener("loading", this.onLoading);
    this.emitter.removeEventListener("error", this.onError);
  }

  static listen(callbacks: {
    onError?: () => void;
    onSuccess?: () => void;
    onLoading?: () => void;
  }) {
    if (callbacks.onError) {
      this.listenToErrorEvent(callbacks.onError);
    }
    if (callbacks.onSuccess) {
      this.listenToSuccessEvent(callbacks.onSuccess);
    }
    if (callbacks.onLoading) {
      this.listenToLoadingEvent(callbacks.onLoading);
    }
  }
  static listenToSuccessEvent(callback: () => void) {
    this.emitter.addEventListener("success", callback);
    this.onSuccess = callback;
  }
  static listenToErrorEvent(callback: () => void) {
    this.emitter.addEventListener("error", callback);
    this.onError = callback;
  }
  static listenToLoadingEvent(callback: () => void) {
    this.emitter.addEventListener("loading", callback);
    this.onLoading = callback;
  }
}
