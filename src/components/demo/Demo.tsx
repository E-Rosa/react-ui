import { useState } from "react";
import Modal from "../modal/modal";
import {
  emitError,
  emitLoading,
  emitSuccess,
} from "../feedbackProvider/feedbackProvider";

interface DemoProps {}

function Demo(_: DemoProps) {
  const [modalIsActive, setModalIsActive] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setModalIsActive(true);
        }}
        className="cButton"
      >
        Activate modal
      </button>
      {modalIsActive && (
        <Modal
          onOutsideClick={() => {
            setModalIsActive(false);
          }}
          containerClassName="flex flex-col items-center justify-center h-full gap-2"
        >
          <div className="flex flex-col p-10 bg-[#111111]">
            <h1>Some title</h1>
            <p>Some text, something in the modal.</p>
          </div>
        </Modal>
      )}
      <div className="flex gap-2 flex-wrap">
        <button
          className="btn"
          onClick={() => {
            emitSuccess({
              message: "Success!",
            });
          }}
        >
          Emit success
        </button>
        <button
          className="btn"
          onClick={() => {
            emitError({
              message: "Error!",
            });
          }}
        >
          Emit error
        </button>
        <button
          className="btn"
          onClick={() => {
            emitLoading({ isLoading: true });
          }}
        >
          Emit loading true
        </button>
        <button
          className="btn"
          onClick={() => {
            emitLoading({ isLoading: false });
          }}
        >
          Emit loading false
        </button>
      </div>
    </>
  );
}

export default Demo;
