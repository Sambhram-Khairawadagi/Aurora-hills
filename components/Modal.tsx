"use client";

import { useEffect, useId, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

/** Native modal provides focus trapping, Escape, and an inert background. */
export function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const closeRef = useRef(onClose);
  const id = useId();
  closeRef.current = onClose;
  useEffect(() => {
    const dialog = ref.current;
    if (!open || !dialog) return;
    const previous = document.activeElement as HTMLElement | null;
    const heading = dialog.querySelector('h2, h3');
    if (heading) { heading.id = `${id}-title`; dialog.setAttribute('aria-labelledby', heading.id); }
    dialog.querySelectorAll('label').forEach((label, index) => {
      const control = label.parentElement?.querySelector('input, select, textarea');
      if (control) { control.id ||= `${id}-field-${index}`; label.htmlFor = control.id; }
    });
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    const cancel = (event: Event) => { event.preventDefault(); closeRef.current(); };
    dialog.addEventListener('cancel', cancel);
    return () => {
      dialog.removeEventListener('cancel', cancel);
      dialog.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [open, id]);
  if (!open || typeof document === 'undefined') return null;
  return createPortal(<dialog ref={ref} className="aurora-dialog" aria-modal="true">{children}</dialog>, document.body);
}
