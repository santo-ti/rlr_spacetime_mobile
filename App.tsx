import { StatusBar } from 'expo-status-bar'
import { ImageBackground, Text } from 'react-native'

import { BaiJamjuree_700Bold, useFonts } from '@expo-google-fonts/bai-jamjuree'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { styled } from 'nativewind'
import bgBlur from './src/assets/img/bg-blur.png'
import Stripes from './src/assets/img/stripes.svg'

const StyledStripes = styled(Stripes)

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
    <ImageBackground
      source={bgBlur}
      className="relative flex-1 items-center bg-zinc-900"
      imageStyle={{ position: 'absolute', left: '-100%' }}
    >
      <StyledStripes className="absolute left-2" />

      <Text className="font-title text-5xl text-zinc-50">RLRs</Text>

      <StatusBar style="light" translucent />
    </ImageBackground>
  )
}
