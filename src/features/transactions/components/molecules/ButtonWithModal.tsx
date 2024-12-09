import {FC, ReactNode} from 'react';
import { ButtonWithText } from '@shared/components/molecules';
import { Icon, Modal } from '@shared/components/atoms';
import { scaledFontSize } from '@shared/utils/Pixel';
import { typography } from '@shared/style';

type Props = {
  children: ReactNode;
  title: string;
  visible: boolean;
  onDismiss: () => void;
  onPress: () => void;
};

const ButtonWithModal: FC<Props> = ({
  children,
  title,
  visible,
  onDismiss = () => {},
  onPress = () => {},
}) => {
  return (
    <>
      <ButtonWithText
        trailingIcon={
          <Icon name="chevron-down" size={scaledFontSize(20)} color="tomato" />
        }
        label={title}
        onPress={onPress}
        buttonStyle={{
          backgroundColor: 'transparent',
          paddingHorizontal: 0,
        }}
        textStyle={{
          color: 'tomato',
          textTransform: 'uppercase',
          fontWeight: typography.fontWeights.bold,
        }}
      />
      <Modal visible={visible} onDismiss={onDismiss}>
        {children}
      </Modal>
    </>
  );
};

export default ButtonWithModal;
