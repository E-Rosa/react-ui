import { useEffect, useRef } from "react";

export interface ModalProps {
  children: JSX.Element;
  onOutsideClick?: (ev?: React.MouseEvent<HTMLDivElement>) => void;
  hideCloseButton?: boolean;
  containerClassName?: string;
  className?: string;
  closeButtonClassName?: string;
}

function Modal(props: ModalProps) {
  const childDivRef = useRef<HTMLDivElement>(null);
  const containerDivRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (childDivRef.current) {
      childDivRef.current.focus();
      childDivRef.current.scrollIntoView();
    } else {
      if (containerDivRef.current) {
        containerDivRef.current.focus();
        containerDivRef.current.scrollIntoView();
      }
    }
  }, []);

  useEffect(() => {
    // Disable body scrolling when the component mounts
    document.body.style.overflow = "hidden";

    // Enable body scrolling when the component unmounts
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);
  return (
    <div
      ref={containerDivRef}
      onClick={(ev) => {
        if (props.onOutsideClick) {
          const clickedItem = ev.target;
          const modalContainer = ev.currentTarget;

          if (clickedItem == modalContainer) props.onOutsideClick(ev);
        }
      }}
      className={`hide-scrollbar overflow-scroll h-screen fixed inset-0 flex flex-col items-center w-screen bg-black bg-opacity-[95%] z-[49] ${props.className}`}
    >
      <div className={props.containerClassName}>
        {!props.hideCloseButton && (
          <button
            onClick={() => {
              props.onOutsideClick?.();
            }}
            className={props.closeButtonClassName || "self-end"}
          >
            {closeIcon}
          </button>
        )}
        {props.children}
      </div>
    </div>
  );
}

export default Modal;

export const closeIcon = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Menu / Close_LG"> <path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
);
