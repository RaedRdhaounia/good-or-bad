import React, { useMemo, useState } from 'react'
import { ScrollView } from 'react-native'
import Cards from '../components/Card'
import CardsData from "../data/cardsData.json" 

type dataProps = {
id: number;
text: string;
uri: string;}[]

function Good_or_bad() {
  const data : dataProps  = useMemo(() =>  CardsData,[])
  const [cardList, setCardList] = useState<dataProps>(data)
  return (
    <ScrollView>
    {
      cardList.map(item =>
        <Cards data={item} setCardList={setCardList} key={item.id}/>
        )
    }
      </ScrollView>
    
    )
}

export default Good_or_bad