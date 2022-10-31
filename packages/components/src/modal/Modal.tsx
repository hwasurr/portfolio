import { useTheme } from '@emotion/react';
import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';
import { PropsWithChildren, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import Button from '../button/Button/Button';

export interface ModalProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}
export default function Modal({
  isOpen,
  onClose,
  children,
}: ModalProps): JSX.Element | null {
  const theme = useTheme();

  const modalBodyRef = useRef<HTMLDivElement>();
  const onOutsideClick = (e: React.MouseEvent): void => {
    e.stopPropagation();
    if (modalBodyRef.current && !modalBodyRef.current.contains(e.target as any)) {
      onClose();
    }
  };

  useEffect(() => {
    const escKeyModalClose = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', escKeyModalClose);
    return () => window.removeEventListener('keydown', escKeyModalClose);
  }, [onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <RemoveScroll>
          <FocusLock
            returnFocus={{ preventScroll: false }} // working not in all browsers
          >
            <motion.div
              css={{
                padding: 16,
                position: 'fixed',
                left: 0,
                top: 0,
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'auto',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                zIndex: theme.zIndex.modal,
                paddingTop: 120,
                paddingBottom: 120,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onOutsideClick}
            >
              <motion.div
                ref={modalBodyRef}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                css={{
                  position: 'relative',
                  maxWidth: 600,
                  width: '100%',
                  margin: 'auto',
                  minHeight: '300px',
                  backgroundColor: 'white',
                  padding: theme.spacing[6],
                  borderRadius: theme.borderRadius.md,
                }}
              >
                <motion.div css={{ position: 'sticky', top: 0, textAlign: 'end' }}>
                  <Button
                    variant="ghost-outline"
                    color="info"
                    sx={{
                      outline: '1px',
                      outlineStyle: 'dashed',
                      background: 'white',
                      padding: '8px 12px',
                      borderRadius: '1.5rem',
                    }}
                    onClick={onClose}
                  >
                    X
                  </Button>
                </motion.div>
                {children}
              </motion.div>
            </motion.div>
          </FocusLock>
        </RemoveScroll>
      )}
    </AnimatePresence>,
    document.getElementById('modal'),
  );
}
