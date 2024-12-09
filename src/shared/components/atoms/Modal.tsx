import {FC, ReactNode} from 'react';
import {Modal as ModalRN} from 'react-native';

type Props = {
  children: ReactNode;
  visible: boolean;
  onDismiss: () => void;
};

const Modal: FC<Props> = ({
  children,
  visible = false,
  onDismiss = () => {},
}) => {
  return (
    <ModalRN
      visible={visible}
      onDismiss={onDismiss}
      onRequestClose={onDismiss}
      animationType="fade"
      transparent>
      {children}
    </ModalRN>
  );
};

export default Modal;
