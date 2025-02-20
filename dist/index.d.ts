import { Context } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { ReactNode } from 'react';

export declare function Carousel({ children }: {
    children: JSX.Element[];
}): JSX_2.Element;

export declare const CarouselContext: Context<    {
nextPage: () => void;
previousPage: () => void;
goToPage: (page: number) => void;
addPage: (page: JSX.Element) => void;
}>;

/**
 * Emits an error event. Listeners will respond right away if they exist.
 */
export declare const emitError: (payload: ErrorEvent_2) => void;

/**
 * Emits a loading event. Listeners will respond right away if they exist.
 */
export declare const emitLoading: (payload: LoadingEvent) => void;

/**
 * Emits a success event. Listeners will respond right away if they exist.
 */
export declare const emitSuccess: (payload: SuccessEvent) => void;

declare type ErrorEvent_2 = {
    message?: string;
};

export declare function FeedbackProvider({ children }: {
    children: ReactNode;
}): JSX_2.Element;

export declare const FeedbackProviderContext: Context<    {
setError: (message?: string) => void;
setSuccess: (message: string | JSX.Element, opts?: {
isPermanent?: boolean;
durationMilliseconds?: number;
}) => void;
setLoading: (state: boolean) => void;
}>;

declare type LoadingEvent = {
    isLoading: boolean;
};

export declare function Modal(props: ModalProps): JSX_2.Element;

declare interface ModalProps {
    children: JSX.Element;
    onOutsideClick?: (ev?: React.MouseEvent<HTMLDivElement>) => void;
    hideCloseButton?: boolean;
    containerClassName?: string;
    className?: string;
    closeButtonClassName?: string;
}

declare type SuccessEvent = {
    message?: string | JSX.Element;
    opts?: {
        isPermanent?: boolean;
        durationMilliseconds?: number;
    };
};

export declare function useFeedback(): {
    setError: (message?: string) => void;
    setSuccess: (message: string | JSX.Element, opts?: {
        isPermanent?: boolean;
        durationMilliseconds?: number;
    }) => void;
    setLoading: (state: boolean) => void;
};

export { }
