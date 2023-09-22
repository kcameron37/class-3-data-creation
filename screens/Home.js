import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box, TextArea, Switch, Button } from "native-base";
import { useNavigation } from '@react-navigation/native';



export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <NativeBaseProvider>
                <Text>Hello there! What is your name? </Text>
                <TextArea
                    h={20}
                    placeholder="Text Area Placeholder"
                    width="75%"
                                    />
                <Text>Can I help you?</Text>
                <Text display="flex" alignItems="center">
                    <Switch size="lg" />
                </Text>

                <Text>
                <Button shadow={2} onPress={() => navigation.navigate('About')}>
                    Click Me!
                    </Button>
                </Text>

            </NativeBaseProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
});