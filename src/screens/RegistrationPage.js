import React, {Component} from 'react';
import {TextInput, Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {Button} from '../components';
import STYLES from '../utils/styles';
import {connect} from 'react-redux';
import {initRegistration} from '../store/actions/registrationAction';
import Login from './Login';

class Registration extends Component {
  state = {
    UserName: 'Deep',
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  };

  render() {
    const {UserName, email, password} = this.state;
    if (this.props.user)
       return <View>{this.props.navigation.navigate('Login')}</View>;

    return (
      <>
        <SafeAreaView style={[STYLES.main, styles.main]}>
          <Text style={styles.logo}>Logo</Text>
          <TextInput
            value={UserName}
            style={styles.input}
            placeholder="Enter User Name"
            onChangeText={value =>
              this.setState({UserName: value})
            }></TextInput>

          <TextInput
            value={email}
            style={styles.input}
            placeholder="Enter email"
            onChangeText={value => this.setState({email: value})}></TextInput>

          <TextInput
            value={password}
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry
            onChangeText={value =>
              this.setState({password: value})
            }></TextInput>

          <Button
            title="Register"
            onPress={() => this.props.initRegistration(this.state)}
          />
        </SafeAreaView>
      </>
    );
  }
}
const mapStateToProps = state => ({
  user: state.registrationReducer.user,
});
export default connect(mapStateToProps, {initRegistration})(Registration);
// export default Registration;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignContent: 'center',
    margin: 30,
  },
  logo: {
    marginTop: -100,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
    paddingVertical: 32,
    marginBottom: 50,
  },
  input: {
    backgroundColor: 'rgba(0,0,0,.1)',
    padding: 10,
    fontSize: 20,
    marginVertical: 10,
  },
});
