import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import FormTextInput from '../components/formInputs/FormTextInput';
import GradientButton from '../components/buttons/GradientButton';
import TransParentButton from '../components/buttons/TransParentButton';

export default LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.25}}>
        <Image
          style={{
            height: '100%',
            width: '25%',
          }}
          source={require('../assets/glassIcon.jpg')}
        />
      </View>
      <View style={{flex:0.75}} >
        <Text style={styles.headigText}>Jump Back In!</Text>
        <Text style={[styles.headigText, {fontSize: 13, lineHeight: 22}]}>
          We’ve missed you and you’ve missed a lot. 3478 awesome parties have
          been created on PartyApp since you’ve begun.
        </Text>
        <View style={styles.formCoantainer} >
          <FormTextInput placeholder={'Email or Phone Number'} />
          <FormTextInput placeholder={'Password'} />
          <TouchableOpacity style={{alignSelf: 'flex-end'}}>
            <Text
              style={[
                styles.headigText,
                {fontSize: 13, lineHeight: 22, color: '#287287'},
              ]}>
              Forgot your password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <GradientButton onPress={() => navigation.navigate('SignUpScreen')} btnText={"Log In"}  />
      <TransParentButton onPress={() => navigation.navigate('SignUpScreen')} btnText={"SignUp"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  headigText: {
    fontSize: 48,
    lineHeight: 50,
    color: '#14142B',
    fontWeight: '300',
  },
  formCoantainer:{
    marginTop:20
  }
});
