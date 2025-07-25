import { useTypedNavigation } from 'hooks/useTypedNavigation';
import { View, Text, Pressable } from 'react-native';

export default function Home() {
  const { navigate } = useTypedNavigation();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold">Home</Text>
      <Pressable onPress={() => navigate('Auth')}>
        <Text className="text-blue-500 mt-4">Go to Auth</Text>
      </Pressable>
    </View>
  );
}
