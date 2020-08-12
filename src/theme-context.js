import React from 'react'

export const themes={
    dark:{
        color:'white',
        selectedColor:'#313131',
        background:'black',
        smallColor:"gray",
        lightBackground:'#212121',
        grayBackground:'#414141'

    },
    light:{
        color:'black',
        selectedColor:'#f1f1f1',
        background:'white',
        smallColor:"red",
        lightBackground:'#f9f9f9',
        grayBackground:'lightgrey'
        
    }
}

const ThemeContext = React.createContext(themes.dark)

export default ThemeContext