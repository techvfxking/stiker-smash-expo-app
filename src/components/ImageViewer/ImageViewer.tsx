import React from "react";
import { Image } from "react-native";
import { IImagePlaceHolder } from "./TImageViewer";
import { styles } from "./ImageViewer.Styles";

const ImageViewer = (props: IImagePlaceHolder) => {
  const imageSource = props.selectedImage
    ? { uri: props.selectedImage }
    : props.ImageSrc
    return <Image source={imageSource} style={styles.image} />
}

export default ImageViewer;