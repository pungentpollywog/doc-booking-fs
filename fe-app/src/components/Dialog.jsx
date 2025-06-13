import { useRef, useEffect } from 'react';

import './Dialog.scss';

export default function Dialog({ children, open, setOpen }) {
  const dialogRef = useRef(null);

  function handleClose(ev) {
    const formData = new FormData(ev.target.children[0]);
    const formValues = Object.fromEntries(formData);
    console.log(formValues);
    setOpen(false);
  }

  useEffect(() => {
    if (dialogRef.current) {
      if (open) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [open]);

  return <dialog ref={dialogRef} onClose={handleClose}>{children}</dialog>;
}
