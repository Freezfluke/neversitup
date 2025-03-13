import React, {useRef} from 'react';
import {
  View,
  ImageBackground,
  Animated,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {StyledCarousel} from './styled';

interface CarouselItem {
  id: string;
  name: string;
  imageUrl: string;
}

interface CarouselProps {
  data: CarouselItem[];
  onPress: (id: string) => void;
}

const Carousel: React.FC<CarouselProps> = ({data, onPress}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flashListRef = useRef(null);

  return (
    <FlatList
      ref={flashListRef}
      data={data}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => onPress(item.id)}>
          <View style={StyledCarousel.itemContainer}>
            <ImageBackground
              source={{uri: item.imageUrl}}
              style={StyledCarousel.backgroundImage}
              imageStyle={StyledCarousel.imageRadius}>
              <View style={StyledCarousel.overlay} />
              <Text style={StyledCarousel.itemText}>{item.name}</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={false}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: false,
      })}
      scrollEventThrottle={32}
      keyExtractor={item => item.id}
      pagingEnabled
    />
  );
};

export default Carousel;
