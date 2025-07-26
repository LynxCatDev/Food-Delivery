import { useAuth } from '@/hooks/useAuth';
import { Image, View } from 'react-native';
import { useProfile } from './useProfile';
import Layout from '@/components/Layout/Layout';
import { Heading } from '@/components/Heading/Heading';
import { Button } from '@/components/Button/Button';
import { AuthService } from '@/services/auth/auth.service';

const Profile = () => {
  const { setUser } = useAuth();
  const { profile } = useProfile();

  return (
    <Layout>
      <Heading isCentered>Profile</Heading>

      <View className="my-6 items-center">
        <Image
          source={{ uri: profile?.avatarPath }}
          className="w-40 h-40 rounded-full"
        />
      </View>

      <Button
        onPress={() => AuthService.logout().then(() => setUser(null))}
        className="mt-5"
      >
        Logout
      </Button>
    </Layout>
  );
};

export default Profile;
