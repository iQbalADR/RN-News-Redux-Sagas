import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './row.styles';

const RowHome = (props) => (
    <TouchableOpacity
        onPress={()=>props.navigateTo(props)}
    >
        <View style={styles.listItem}>
            <View style={styles.listItemRight}>
                <Text style={styles.titleItems}>{props.name}</Text>
            </View>
        </View>
    </TouchableOpacity>
);

export default RowHome;