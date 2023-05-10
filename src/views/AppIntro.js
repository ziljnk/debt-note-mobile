import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import slide1 from '../images/intro1.png';
import slide2 from '../images/intro2.png';
import slide3 from '../images/intro3.png';
import { useNavigation } from '@react-navigation/native';

const slides = [
  {
    key: 'slide1',
    title: 'Chào mừng đến với Debt Note',
    text: 'Giải pháp công nghệ cho việc việc quản lý tiền nợ dễ dàng và tiện lợi hơn.',
    image: slide1,
  },
  {
    key: 'slide2',
    title: 'Các tính năng tuyệt vời',
    text: 'Thống kê vay mượn dễ dàng và có cái nhìn tổng quát tốt nhất về tiền nợ.',
    image: slide2,
  },
  {
    key: 'slide3',
    title: 'Bắt đầu ngay hôm nay',
    text: 'Sử dụng Debt Note miễn phí ngay hôm nay',
    image: slide3,
  },
];

const renderItem = ({ item }) => {
  return (
    <View style={styles.slide}>
      <Image style={styles.image} source={item.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};



const AppIntro = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    // Do something when the user clicks the "Done" button
    navigation.navigate("Main");
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={handleDone}
      showSkipButton={true}
      activeDotStyle={styles.dotStyle}
    renderSkipButton={() => (
        <Text style={styles.skipLabel}>Bỏ qua</Text>
      )}
    renderDoneButton={() => (
        <Text style={styles.doneLabel}>Hoàn tất</Text>
      )}
      renderNextButton={() => (
        <Text style={styles.nextLabel}>Tiếp theo</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2',
  },
  image: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 40,
  },
  skipLabel: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  doneLabel: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },
  nextLabel: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  dotStyle: {
    backgroundColor: '#000',
  },
});

export default AppIntro;
