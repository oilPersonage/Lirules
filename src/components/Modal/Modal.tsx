import { ReactElement } from 'react';
import { createPortal } from 'react-dom';

import Cross from '@icons/cross.svg';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import { Button } from '@components/Button';

import styles from './styles.scss';

type ModalSize = 'sm' | 'md' | 'lg';

const classSizes: Record<ModalSize, string> = {
  lg: styles.Modal__lg,
  md: styles.Modal__md,
  sm: styles.Modal__sm,
};

interface IModal {
  children?: ReactElement | ReactElement[] | null;
  isShowing: boolean;
  hide: () => void;
  size?: ModalSize;
  controls?: boolean;
  dark?: boolean;
}

export const Modal = ({
  isShowing,
  hide,
  dark,
  children,
  size = 'sm',
  controls = false,
}: IModal) => {
  return createPortal(
    <AnimatePresence initial={false}>
      {isShowing && (
        <motion.div
          className={styles.Modal__overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          key="modal"
          onClick={hide}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className={cn(styles.Modal, classSizes[size], { [styles.Modal_dark]: dark })}
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {children}
            {controls && (
              <div className={styles.Modal__button}>
                <Button type="outline" onClick={hide} theme="dark">
                  Закрыть
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
