import React from "react";
import { Image } from "react-native";
import { IImagePlaceHolder } from "./TImageViewer";
import { styles } from "./ImageViewer.Styles";

const ImageViewer = (props: IImagePlaceHolder) => {
    return (
    <Image source={props.ImageSrc} style={styles.image} />
  );
}

export default ImageViewer;