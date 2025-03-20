import { Image,StyleSheet } from "react-native";
import React from "react";

const WallpaperCard = ({ uri }: { uri: string }) => {
  return <Image style={style.images} source={{ uri: uri }} />;
};


const style = StyleSheet.create({
    images:{
        flex:1,
        height:300
    }
})

export default WallpaperCard;
