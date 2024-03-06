import React from 'react';
import {View, Image, Dimensions, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import {BannerAd, TestIds, BannerAdSize} from 'react-native-google-mobile-ads';
const Screen1 = () => {
  const screenWidth = Dimensions.get('window').width;

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

  return (
    <View style={styles.container}>
      <Swiper
        showsPagination={true}
        loop={true}
        autoplay={true}
        autoplayTimeout={6}
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
          </View>
        ))}
      </Swiper>
      <View>
        <BannerAd unitId={TestIds.BANNER} size={BannerAdSize.FULL_BANNER} />
      </View>
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
});
