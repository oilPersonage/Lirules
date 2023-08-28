import { ReactElement } from 'react';
import { createPortal } from 'react-dom';

import { ReactComponent as Cross } from '@icons/cross.svg';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

import { Button } from '@components/Button';

import styles from './styles.module.scss';

type ModalSize = 'sm' | 'md' | 'lg';

const classSizes: Record<ModalSize, string> = {
  lg: styles.Modal__lg,
  md: styles.Modal__md,
  sm: styles.Modal__sm,
};

interface IModal {
  children?: ReactElement | ReactElement[] | null;
  isShowing: boolean;
  onClose: () => void;
  size?: ModalSize;
  controls?: boolean;
  isDark?: boolean;
  center?: boolean;
}

export const Modal = ({
  isShowing,
  onClose,
  isDark,
  children,
  center,
  size = 'sm',
  controls = false,
}: IModal) => {
  return createPortal(
    <AnimatePresence initial={false}>
      {isShowing && (
        <motion.div
          className={cn(styles.Modal__overlay, {
            [styles.Modal__overlay_center]: center,
          })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          key="modal"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className={cn(styles.Modal, classSizes[size], {
              [styles.Modal_dark]: isDark,
            })}
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
                <Button type="outline" onClick={onClose} theme="dark">
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
