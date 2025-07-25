import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { IAuthFormData } from 'types/auth.interface';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { AuthFields } from './AuthFields';

const Auth = () => {
  const [isReg, setIsReg] = useState(false);

  const { handleSubmit, reset, control } = useForm<IAuthFormData>({
    mode: 'onChange',
  });

  const onSubmit = (data: IAuthFormData) => {
    console.log(data);
  };

  const isLoading = false;
  return (
    <View className="mx-2 items-center justify-center h-full">
      <View className="w-9/12">
        <Text className="text-center text-black text-3xl font-medium mb-8">
          {isReg ? 'Sign Up' : 'Login'}
        </Text>
        {isLoading ? (
          <Loader />
        ) : (
          <View>
            <AuthFields control={control} />

            <Button onPress={handleSubmit(onSubmit)}>
              {isReg ? 'Sign Up' : 'Login'}
            </Button>

            <Pressable onPress={() => setIsReg(!isReg)}>
              <Text className="text-center text-black text-base mt-6">
                {isReg
                  ? 'Already have an account? Login'
                  : "Don't have an account? Sign Up"}
              </Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

export default Auth;
