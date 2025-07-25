import { StatusBar, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from 'screens/navigation/Navigation';
import AuthProvider from './providers/auth/AuthProvider';
import './global.css';
import Toast from './components/Toast/Toast';

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar barStyle="light-content" />
        <Toast />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
