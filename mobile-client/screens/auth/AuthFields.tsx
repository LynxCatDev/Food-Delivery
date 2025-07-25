import { Field } from 'components/Field/Field';
import { Control } from 'react-hook-form';
import { View } from 'react-native';
import { IAuthFormData } from 'types/auth.interface';
import { validEmail } from './email.regex';

interface AuthFieldsProps {
  control: Control<IAuthFormData>;
}

export const AuthFields = ({ control }: AuthFieldsProps) => {
  return (
    <View>
      <Field
        placeholder="Enter email"
        control={control}
        name="email"
        rules={{
          required: 'Email is required',
          pattern: {
            value: validEmail,
            message: 'Please enter a valid email address',
          },
        }}
        keyboardType="email-address"
      />

      <Field
        placeholder="Enter password"
        control={control}
        name="password"
        secureTextEntry
        rules={{
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters long',
          },
        }}
      />
    </View>
  );
};
