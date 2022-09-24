import react from "react";
import { View, Text } from "react-native-web";
import * as Progress from 'react-native-progress';
import { Image } from "react-native";
import ProgressBar from 'react-native-progress/Bar';

export const AddCar = () => {
    return <>
        <View>
            <Image 
                source={{ uri: 'http://loremflickr.com/640/480/dog' }} 
                indicator={ProgressBar} 
                style={{
                    width: 320, 
                    height: 240, 
                }}/>
        </View>
    </>
}