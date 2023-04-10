import React from 'react';
import { Button } from '../Button';

export const ModalInfo = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex  fixed inset-0 z-50 mx-10">
            <div className="relative w-auto max-w-xs bg-[#FFE600] rounded-3xl border-dashed border-2 border-black shadow-2xl">
              <div className="relative p-5 flex-auto text-black">
                "This service does not collect or store any user metadata. <br />
                <br /> We do not track or monitor user activity, nor do we collect any information
                about user behavior or preferences."
                
                <div className="flex justify-center mt-5">
                  <Button
                    onClick={() => setShowModal(false)}
                    width={64}
                    height={64}
                    className="bg-black text-[#FFE600] shadow-2xl">
                    Got it
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-5 fixed inset-0 z-40 bg-[#FFE500]"></div>
        </>
      ) : null}
    </>
  );
};
