import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import { BaiJamjuree_700Bold, useFonts } from '@expo-google-fonts/bai-jamjuree'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  })

  if (!hasLoadedFonts) {
    return null
  }

  return (
    <View className="flex-1 items-center justify-center bg-zinc-900">
      <Text className="font-title text-5xl text-zinc-50">RLRs</Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
