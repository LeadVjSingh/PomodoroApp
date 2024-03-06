
import React, {useRef} from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Swiper from 'react-native-swiper';

const Screen1 = ({navigation}) => {
  const screenWidth = Dimensions.get('window').width;
  const swiperRef = useRef(null);

  const carouselData = [
    {
      id: '01',
      image: require('../images/image1.jpg'),
    },
    {
      id: '02',
      image: require('../images/image2.jpg'),
    },
    {
      id: '03',
      image: require('../images/image3.jpg'),
    },
    {
      id: '04',
      image: require('../images/image4.jpg'),
    },
    {
      id: '05',
      image: require('../images/image5.jpg'),
    },
    {
      id: '06',
      image: require('../images/image6.jpg'),
    },
  ];

  const handleExit = () => {
  navigation.navigate('Setting');
  };

  const goToNextSlide = () => {
    if (swiperRef.current) swiperRef.current.scrollBy(1);
  };

  return (
    <View style={styles.container}>
      <Swiper
        ref={swiperRef}
        showsPagination={true}
        loop={false}
        autoplay={false} // Set autoplay to false for manual control
        paginationStyle={{bottom: 10}}
        activeDotColor="green"
        dotColor="red"
        horizontal={true}>
        {carouselData.map((item, index) => (
          <View key={item.id} style={styles.slide}>
            <Image
              source={item.image}
              style={{height: 750, width: screenWidth}}
            />
            {index !== carouselData.length - 1 ? (
              <TouchableOpacity
                onPress={goToNextSlide}
                style={styles.nextButton}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleExit} style={styles.exitButton}>
                <Text style={styles.buttonText}>Exit</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  exitButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
