# 🍕 Food Delivery App

A full-stack food delivery application built with React Native (Expo) for the mobile client and NestJS for the backend server.

## 📱 Project Overview

This project enables users to browse restaurants, view menus, place orders, and track deliveries through a mobile application, with a robust backend API managing all operations.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI: `npm install -g @expo/cli`
- For iOS development: Xcode
- For Android development: Android Studio

### Installation

1. **Clone the repository**
   git clone https://github.com/LynxCatDev/Food-Delivery.git
   cd Food-Delivery/mobile-client

2. **Install dependencies for both client and server**
   npm install/yarn add

### Running the Application

- `npm run android/yarn android` - Run on Android device/emulator
- `npm run ios/yarn ios` - Run on iOS device/simulator
- `npm run start/yarn start` -This will open the Expo development server. You can then: - Press `i` to open iOS simulator - Press `a` to open Android emulator - Scan QR code with Expo Go app on your phone

The server will start on `http://192.168.31.203:8081`

## 🛠️ Development Setup

### Environment Variables

Create `.env` files in both directories using the provided examples:

**Mobile (.env)**
cp mobile/.env.example mobile/.env

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Tudor Uzun
