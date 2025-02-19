export type FeedbackSuccessEventPayload = {
  id: string;
  message?: string | JSX.Element;
  opts?: { isPermanent?: boolean; durationMilliseconds?: number };
}[];
export class FeedbackSuccessEvent extends CustomEvent<FeedbackSuccessEventPayload> {
  constructor(payload: FeedbackSuccessEventPayload) {
    super("success", { detail: payload });
  }
}

export type FeedbackErrorEventPayload = { message: string };
export class FeedbackErrorEvent extends CustomEvent<FeedbackErrorEventPayload> {
  constructor(payload: FeedbackErrorEventPayload) {
    super("error", { detail: payload });
  }
}

export type FeedbackLoadingEventPayload = { isLoading: boolean };
export class FeedbackLoadingEvent extends CustomEvent<FeedbackLoadingEventPayload> {
  constructor(payload: FeedbackLoadingEventPayload) {
    super("loading", { detail: payload });
  }
}
