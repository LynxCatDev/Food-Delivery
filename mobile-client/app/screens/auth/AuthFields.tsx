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
      />
    </View>
  );
};
