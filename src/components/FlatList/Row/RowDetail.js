import React from 'react';
import Moment from 'moment';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './row.styles';

const RowDetail = (props) => (
    <TouchableOpacity
        onPress={()=>props.navigateTo(props)}
    >
        <View style={styles.listItem}>
            <View style={styles.listItemLeft}>
                <Image 
                    style={styles.listItemImage}
                    source={{uri: props.urlToImage}}
                />
            </View>
            <View style={styles.listItemRight}>
                <Text>{props.title}</Text>
                <Text> {Moment(props.publishedAt).format('DD-M-Y')}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

export default RowDetail;