import React from 'react';
import { StyleSheet, Pressable, View } from "react-native";
import { Form, Formik } from 'formik';

import Text from "./Text";
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import { flex } from 'synonyms/dictionary';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 'auto',
    marginBottom: 'auto',
  },  
	inputField: {
    height: 40,
    padding: 10,
    color: 'lightblue',
    backgroundColor: 'white',
    fontSize: 16,
    marginHorizontal: 20,
    marginVertical: 5,
		borderBottomWidth: 1,
  },
  login: {
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    paddingVertical: 10,
  },
  txtLogin: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  }
});

const Signin = ({onSubmit}) =>{

  return (
    <View style={styles.container}>
    <View>
      <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: '',
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
          <Form>
            <FormikTextInput style={styles.inputField} name="username" placeholder="Username" />
            <FormikTextInput style={styles.inputField} name="password" placeholder="Password" />
            
            <Pressable style={styles.login} onPress={onSubmit}>
              <Text style={styles.txtLogin}>LOGIN</Text>
            </Pressable>
          </Form>
      </Formik>
    </View>
  </View>
  )
};

export default Signin;