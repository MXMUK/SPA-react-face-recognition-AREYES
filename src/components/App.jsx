import Webcam from 'react-webcam';
import { ButtonsBar } from './ButtonsBar';
import { useEffect, useState } from 'react';
import { ModalInfo } from './ModalInfo';
import { Loader } from './Loader';

export const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [screen, setScreen] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    setIsLoading(true);
  }, [screen]);

  return (
    <div className="flex justify-center h-screen">
      <div className="text-white flex flex-col ">
        <div className="relative h-full flex justify-center">
          <Webcam className="rounded-3xl aspect-[4/5] object-cover" />

          {isLoading ? (
            <Loader />
          ) : (
            screen === 1 && (
              <div className="justify-center items-center flex flex-col mx-5 absolute bottom-0 left-0 right-0 h-full">
                <img src={require('../assets/icon/scan.svg').default} alt="scan" />

                <div className="bg-[#FFE600] rounded-3xl border-dashed border-2 border-black shadow-2xl absolute bottom-10">
                  <div className="p-3 px-8 flex-auto text-black">“Who is this cutest kitty?”</div>
                </div>
              </div>
            )
          )}
        </div>

        <ButtonsBar
          setShowModal={setShowModal}
          showModal={showModal}
          screen={screen}
          setScreen={setScreen}
        />

        <ModalInfo showModal={showModal} setShowModal={setShowModal} />
      </div>
    </div>
  );
};
