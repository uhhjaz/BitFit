/**
 * This is an internal button component that uses Touchable opacity and Text.
 * 
 * Authors: ?
 */

// External Imports
import React, { Component } from 'react';
import {Text, TouchableOpacity } from "react-native";

// Internal Imports
import styles from "../style/c_button";

/**
 * Class that returns a Touchable Opacity object with the correct style and text.
 */
export default class Button extends Component {
    // save the props from when the button is rendered
    render() {
        const { label, disabled, onPress, hide, style } = this.props;
        const s = disabled ? [styles.buttonContainer, styles.disabled, style ] : [styles.buttonContainer, style ]
    
        // return a touchable opacity button that inherits functionality, and is styled
        // in this file
        return hide ? null : (
            <TouchableOpacity disabled={disabled} style={s} onPress={onPress}>
                <Text style={styles.text}>{label}</Text>
            </TouchableOpacity>
        );
    }
}
