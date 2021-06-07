import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../../assets/theme/colors';
import Icon from '../../common/Icon';
import styles from './styles';
import ImagePickerCropper from 'react-native-image-crop-picker';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const ImagePicker = React.forwardRef(({onFileSelected}, ref) => {
  const options = [
    {
      name: 'Take from camera',
      icon: <Icon color={colors.grey} size={scale(21)} name="camera" />,
      onPress: () => {
        ImagePickerCropper.openCamera({
          width: scale(300),
          height: verticalScale(300),
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(images => {
            onFileSelected(images);
          })
          .catch(error => {});
      },
    },
    {
      name: 'Choose from Gallery',
      icon: <Icon name="image" color={colors.grey} size={21} />,
      onPress: () => {
        ImagePickerCropper.openPicker({
          width: scale(300),
          height: verticalScale(300),
          cropping: true,
          freeStyleCropEnabled: true,
        })
          .then(images => {
            onFileSelected(images);
          })
          .catch(error => {
            console.log('error', error);
          });
      },
    },
  ];
  return (
    <RBSheet
      ref={ref}
      height={verticalScale(190)}
      openDuration={250}
      dragFromTopOnly
      closeOnDragDown
      customStyles={{
        container: {
          borderTopRightRadius: scale(20),
          borderTopLeftRadius: scale(20),
        },
      }}>
      <View style={styles.optionsWrapper}>
        {options.map(({name, onPress, icon}) => (
          <TouchableOpacity
            onPress={onPress}
            style={styles.pickerOption}
            key={name}>
            {icon}
            <Text style={styles.text}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </RBSheet>
  );
});

export default ImagePicker;
