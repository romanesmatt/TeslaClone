import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import CarItem from '../CarItem';
import cars from './cars'

const CarsList = (props) => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={cars}
                renderItem={({item}) => <CarItem car={item} /> }
            />
        </View>
    );
};

export default CarsList;