import { StatusBar, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from 'screens/navigation/Navigation';
import AuthProvider from './providers/auth/AuthProvider';
import Toast from './components/Toast/Toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './global.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <AuthProvider> */}
      <SafeAreaProvider>
        <Navigation />
        <StatusBar barStyle="light-content" />
        <Toast />
      </SafeAreaProvider>
      {/* </AuthProvider> */}
    </QueryClientProvider>
  );
}
