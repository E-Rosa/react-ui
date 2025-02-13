import { useState } from "react";
import Modal from "../modal/modal";

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
    </>
  );
}

export default Demo;
