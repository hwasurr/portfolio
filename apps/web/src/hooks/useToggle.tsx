import { useState } from 'react';

interface UseDisclosureOption {
  isDefaultOpen?: boolean;
}
interface UseDisclosureResult {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}
export const useDisclosure = (opts?: UseDisclosureOption): UseDisclosureResult => {
  const [open, setOpen] = useState(!!opts?.isDefaultOpen);
  const onOpen = (): void => {
    setOpen(true);
  };
  const onClose = (): void => {
    setOpen(false);
  };
  const onToggle = (): void => {
    setOpen((prev) => {
      setOpen(!prev);
      return !prev;
    });
  };

  return {
    open,
    onOpen,
    onClose,
    onToggle,
  };
};

export default useDisclosure;
