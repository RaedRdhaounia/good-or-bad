import React, { useMemo } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native'
import { Button } from '@rneui/base';
import CardsData from "../data/cardsData.json"

function HomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="see cards" onPress={() => navigation.navigate('GoodBad', {})}  />
    </View>
  );
}

export default HomeScreen