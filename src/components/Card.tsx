import React, { useEffect } from 'react';
import { 
  View, 
  StyleSheet,
  Animated,
  PanResponder,
  Dimensions
} from 'react-native';
import { Text, Card } from '@rneui/themed';
import Like from './Like';
import Dislike from './Dislike';

type CardProps = {
  data:{id: number;
    text: string;
    uri: string;}
}
type dataProps = {
  data:{id: number;
  text: string;
  uri: string;},
  setCardList: React.Dispatch<React.SetStateAction<CardProps>>
}
const deviceWidth = Dimensions.get("screen").width
const SwipWidht = deviceWidth * 0.5

const Cards = (props: dataProps) => {
  const {data, setCardList} = props
  const position = new Animated.ValueXY({x:0,y:0})

  function getCardStyle() {
    const rotate = position.x.interpolate({
      inputRange: [-deviceWidth * 1.5, 0, deviceWidth * 1.5],
      outputRange: ['-120deg', '0deg', '90deg' ]
    })
    return {
      ...position.getLayout(),
        transform: [{rotate}],
    }
  }
  function swipRight(){
    Animated.timing(position.setValue{
      x: deviceWidth,
      y: deviceWidth
    })
  }
  function resetPosition ({x, y}) {
    if (x > SwipWidht) {
      console.log("liked item")
      setCardList((value) => value.filter(el => el.id !== data.id))
    } else {
    if (x < -SwipWidht) {
      console.log("dislike item")
      setCardList((value) => value.filter(el => el.id !== data.id))

    } else {
      position.setValue ({
        x: 0,
        y:0
      })
    }
  }
  }

  const panRespond = PanResponder.create({
    onStartShouldSetPanResponder : () => true,
    onPanResponderMove : (event, gesture) => {

     position.setValue({
      x: gesture.dx,
      y: 0
     })
    },
    onPanResponderRelease: (event, gesture) => {
      resetPosition({x : gesture.dx, y: gesture.dy})
    }
  })
return (
      <Animated.View style={{...getCardStyle(), zIndex:data.id}} {...panRespond.panHandlers}>
       <Card>
          <Card.Title>{data.id}</Card.Title>
          <Card.Divider />
          <Card.Image
            source={{
              uri: data.uri
            }}
          />
          <Text>
            {data.text}
          </Text>
          <View style={{flexDirection:"row", justifyContent:"space-around", marginVertical:20}} >
            <Dislike/>
            <Like/>
          </View>
        </Card>
      </Animated.View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  position:"absolute",
  
  minWidth: 250
},
fonts: {
  marginBottom: 8,
},
user: {
  flexDirection: 'row',
  marginBottom: 6,
},
image: {
  width: 30,
  height: 30,
  marginRight: 10,
},
name: {
  fontSize: 16,
  marginTop: 5,
},
});

export default Cards;