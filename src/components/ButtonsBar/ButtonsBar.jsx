import React from 'react';
import { Button } from '../Button';

export const ButtonsBar = ({ setShowModal, showModal, screen, setScreen }) => {
  if (screen > 3) {
    setScreen(0);
  }

  const isButtonsDisabled = (screen > 0 && screen < 3) || showModal

  return (
    <div className="grid grid-cols-3 my-8">
      <div className="flex justify-center items-center">
        <Button width={53} height={53} disable={isButtonsDisabled}>
          <img src={require('../../assets/icon/addButtonIcon.svg').default} alt="addIcon" />
        </Button>
      </div>

      <div className="flex justify-center items-center relative">
        <Button width={96} height={96} disable={showModal} className="relative" onClick={() => setScreen(screen + 1)}>
          <div className="absolute top-[-27%] text-[#FFE600]">{`${screen}/3`}</div>

          {screen > 0 && screen < 3 ? (
            <img src={require('../../assets/icon/mainButtonReloadIcon.svg').default} alt="mainIcon" />
          ) : (
            <img src={require('../../assets/icon/mainButtonIcon.svg').default} alt="mainIcon" />
          )}
        </Button>
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        <Button width={48} height={48} className="ml-[24px]" disable={isButtonsDisabled}>
          <img src={require('../../assets/icon/uploadButtonIcon.svg').default} alt="uploadIcon" />
        </Button>

        <Button width={48} height={48} className="mr-[24px]" onClick={() => setShowModal(true)}>
          <img src={require('../../assets/icon/infoButtonIcon.svg').default} alt="infoIcon" />
        </Button>
      </div>
    </div>
  );
};
