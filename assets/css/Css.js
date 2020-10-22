import { StyleSheet } from "react-native";

const CSS = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#17425a',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 50,
        textAlign: 'center',
        textTransform: 'uppercase',
      },
      inputContainer: {
        flex: 1,
        marginTop: 30,
        width: '100%',
        padding: 25,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        alignItems: 'stretch',
        justifyContent: 'center'
      },
      input: {
        marginTop: 5,
        marginBottom: 5,
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 10,
        fontSize: 13,
        alignItems: 'stretch',
        textAlign: 'center'
      },
      button: {
        marginTop: 10,
        height: 45,
        backgroundColor: '#5966a5bd',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 13,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
      text: {
        textAlign: 'center',
        color: '#fff'
      },

});


export { CSS }