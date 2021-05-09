import React, { useState } from "react";

export const useDisclosure = (isOpenInit?: boolean) => {
  const [isOpen, setIsOpen] = useState<boolean>(!!isOpenInit);

  const onOpen = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const onToggle = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return { isOpen, onOpen, onClose, onToggle };
};

export default useDisclosure;
