import react, { useState }  from "react";
import { View, Text } from "react-native-web";
import { ActivityIndicator } from "react-native";

export const Login = () => {
    const [isLoading, setIsLoading] = useState(true)
    return <>
        <View>
            <Text>
                <ActivityIndicator />
            </Text>
        </View>
    </>
}