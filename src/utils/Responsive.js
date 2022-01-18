import React from 'react';

import { Dimensions } from "react-native";
 
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
 
export const responsiveHeight = a =>
{
    return (a*Height)/100;
} 
export const responsiveWidth = b => (b*Width)/100;