import React, {useRef, useState} from 'react';

import {Text, View} from 'react-native';
import CreateContactComponent from '../../components/CreateContactComponet';

const CreateContact = () => {
  const sheetRef = useRef(null);
  const [localFile, setLocalFile] = useState(null);

  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };
  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const onFileSelected = image => {
    closeSheet();
    setLocalFile(image);
    console.log('images', image);
  };

  return (
    <CreateContactComponent
      sheetRef={sheetRef}
      closeSheet={closeSheet}
      openSheet={openSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
    />
  );
};

export default CreateContact;
