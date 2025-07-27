import { StatusBar, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from 'screens/navigation/Navigation';
import AuthProvider from './providers/auth/AuthProvider';
import Toast from './components/Toast/Toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './global.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store';

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
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <AuthProvider>
            <SafeAreaProvider>
              <Navigation />
              <StatusBar barStyle="light-content" />
              <Toast />
            </SafeAreaProvider>
          </AuthProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}
