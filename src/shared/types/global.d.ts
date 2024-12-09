import {ReactNode, type ReactElement} from 'react';
import {type TextStyle, type StyleProp, type ViewStyle} from 'react-native';

export type TextProps = {
  label: string;
  textStyle?: StyleProp<TextStyle>;
};

export type ButtonProps = {
  onPress: () => void;
  children: ReactNode;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export type Transaction = {
  id: string;
  amount: number;
  unique_code: number;
  status: string;
  sender_bank: string;
  account_number: string;
  beneficiary_name: string;
  beneficiary_bank: string;
  remark: string;
  created_at: string;
  completed_at: string;
  fee: number;
};

export type TextInputProps = {
  style?: StyleProp<TextStyle>;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
};
