import { Controller } from 'react-hook-form';
import cn from 'clsx';
import { IField } from './field.interface';
import { Text, TextInput, View } from 'react-native';

export const Field = <T extends Record<string, any>>({
  control,
  rules,
  name,
  className,
  ...props
}: IField<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View
          className={cn(
            'bg-white w-full rounded-lg pb-4 pt-2.5 px-4 my-1.5',
            error ? 'border-red-500 border' : 'border-gray-400',
          )}
        >
          <TextInput
            autoCapitalize="none"
            onChangeText={onChange}
            onBlur={onBlur}
            value={(value || '').toString()}
            className="text-black text-base"
            placeholderTextColor="#6A6A6A"
            {...props}
          />

          {error && (
            <Text className="text-red-500 text-xs mt-1">
              {error.message || 'This field is required'}
            </Text>
          )}
        </View>
      )}
    />
  );
};
