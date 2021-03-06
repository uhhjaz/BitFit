/**
 * Stylesheet for the internal button component.
 * 
 * Authors: ?
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    // Style the button itself
    buttonContainer: {
        width: 320,
        alignItems: "center",
        backgroundColor: "#778899",
        marginBottom: 10,
        paddingVertical: 0,
        borderRadius: 5,
        borderWidth: StyleSheet.hairlineWidth,
    },
    // Style the text on the button
    text: {
        color: "#ffffff",
        textAlign: "center",
        height: 45,
        fontSize: 20,
        fontWeight: '100',
        paddingTop: 12
    },
    disabled: {
        opacity: 0.4
    }
});
