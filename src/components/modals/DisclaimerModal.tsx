import { useEffect, useState } from "react";
import { Modal, ModalActions, ModalButton } from "@/src/components/ui/Modal";

const DISCLAIMER_STORAGE_KEY = "tob-disclaimer-acknowledged";

export const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAcknowledged = localStorage.getItem(DISCLAIMER_STORAGE_KEY);
    if (hasAcknowledged !== "true") {
      setIsOpen(true);
    }
  }, []);

  const handleAcknowledge = () => {
    localStorage.setItem(DISCLAIMER_STORAGE_KEY, "true");
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleAcknowledge}
      title="Pre-Alpha Software"
      maxWidth="md"
    >
      <div className="space-y-4 text-zinc-300">
        <p>If you've happened to stumble upon this app, PLEASE NOTE:</p>
        <p>
          This application is in{" "}
          <span className="text-amber-400 font-medium">pre-alpha</span> and is
          still undergoing active development.
        </p>
        <p>
          Features may be incomplete, change without notice, or contain bugs.
          Saved builds may become incompatible with future versions.
        </p>
        <p className="text-zinc-400 text-sm">Use at your own risk.</p>
      </div>
      <div className="mt-6">
        <ModalActions>
          <ModalButton onClick={handleAcknowledge} fullWidth>
            I Understand
          </ModalButton>
        </ModalActions>
      </div>
    </Modal>
  );
};
