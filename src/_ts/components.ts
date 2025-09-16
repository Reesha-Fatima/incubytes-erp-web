import { ReactNode } from 'react';

export type TypeActions = {
  name: string;
  slug?: string;
  component?: ReactNode;
  styles?: string;
  onPress?: () => void;
  variant?: any;
  disabled?: boolean;
};

export type TypeAttrItem = {
  label: string;
  value: string | number;
  column?: number;
};

export type TypeToast = {
  title: string;
  message: string;
  visible: boolean;
  type: 'success' | 'error';
};
