import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

type DialogType = {
  children: React.ReactNode;
  title: string;
  onCancel: Function;
  hide: boolean | undefined;
  size: "sm" | "md" | "lg" | "xl";
};

const Popup: React.FC<DialogType> = ({
  hide,
  onCancel,
  title,
  children,
  size,
}) => {
  return (
    <Transition appear show={hide} as={Fragment}>
      <Dialog as="div" className="relative z-40" onClose={() => onCancel()}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto mt-20">
          <div className="flex min-h-full items-start justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full ${
                  (!size && "max-w-md") ||
                  (size == "md" && "max-w-md") ||
                  (size == "lg" && "max-w-lg") ||
                  (size == "xl" && "max-w-2xl") ||
                  (size == "md" && "max-w-2xl")
                } transform bg-white p-5 text-left align-middle shadow-xl transition-all`}
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-bold leading-6 text-slate-900/[.90] mb-4 flex justify-center"
                >
                  {title}
                </Dialog.Title>
                <div className="mb-2">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Popup;
