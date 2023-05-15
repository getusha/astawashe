import { StatusBar, Text } from 'react-native';
import { useEffect } from "react";
import { NativeBaseProvider } from "native-base";
import Header from "./components/Header";
import Home from "./screens/Home";

export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle("dark-content")
    StatusBar.setBackgroundColor("white");
  }, []);

  return (
    <NativeBaseProvider>
      <Header />
      <Home />
    </NativeBaseProvider>
  );
}

