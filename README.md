
# Attendance App

## 📱 Overview

A comprehensive React Native application designed to manage and track attendance efficiently. The app provides a user-friendly interface for educators and administrators to record, analyze, and monitor attendance data with ease. Built with modern technologies, it offers real-time insights and detailed reports for better attendance management.

## ✨ Features

### User Authentication
- Secure login and registration system
- User session management

### Attendance Management
- **Mark Attendance**: Record attendance for students with a simple interface
- **Daily Tracking**: View and manage today's attendance
- **Section Management**: Organize students into different sections
- **Student Management**: Add, edit, and remove student records

### Analysis & Reporting
- **Today's Analysis**: Real-time attendance statistics with visual progress bars
- **Yesterday's Analysis**: Review previous day's attendance data
- **Overall Analysis**: Comprehensive attendance trends and patterns
- **Detailed Reports**: Generate and export attendance reports

### Section Management
- Create and manage multiple sections
- Edit section details
- Delete sections when no longer needed

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn package manager
- Expo CLI (for development)
- Android Studio / Xcode (for emulator) or a physical device with Expo Go app

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kuzhanthaivel/attendance-app.git
   cd attendance-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with your configuration:
   ```
   EXPO_PUBLIC_API_URL=your_api_url_here
   ```

### Running the App

1. **Start the development server**
   ```bash
   npx expo start
   ```

2. **Run on a device**
   - Scan the QR code with your device's camera (iOS) or the Expo Go app (Android)
   - For iOS Simulator: Press `i` in the terminal
   - For Android Emulator: Press `a` in the terminal

## 📱 Screens

- **Login/Register**: User authentication
- **Home**: Dashboard with quick access to main features
- **Section Management**: View and manage class sections
- **Add/Edit Student**: Manage student records
- **Today's Attendance**: Mark and view today's attendance
- **Reports**: Generate attendance reports
- **Analysis**: View attendance analytics and trends

## 🛠 Tech Stack

- **Framework**: React Native
- **Development Platform**: Expo
- **Navigation**: React Navigation
- **Styling**: Tailwind CSS with NativeWind
- **State Management**: React Context API
- **Form Handling**: React Hook Form
- **Icons**: Expo Vector Icons

## 📦 Building for Production

### Android
```bash
expo prebuild
cd android && ./gradlew assembleRelease
```

### iOS
```bash
expo prebuild
cd ios && pod install
# Open Xcode and build the app
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing development experience
- [React Native](https://reactnative.dev/) for the cross-platform framework
- [NativeWind](https://www.nativewind.dev/) for the utility-first styling
