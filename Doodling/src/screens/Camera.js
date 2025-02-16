import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

const CameraType = { back: 'back', front: 'front' };
const FlashMode = { off: 'off', on: 'on' };

const CameraApp = () => {
  const [permission, setPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === 'granted');
    })();
  }, []);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    if (!permission || permission.status !== 'granted') {
      setPermission();
    }
  }, [permission]);

  if (!permission) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (permission.status !== 'granted') {
    return <Text>No access to camera. Please enable it in settings.</Text>;
  }

  const handleCameraReady = () => setIsCameraReady(true);

  const switchCameraType = () => {
    setCameraType((prevType) =>
      prevType === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const toggleFlashMode = () => {
    setFlashMode((prevFlashMode) =>
      prevFlashMode === FlashMode.off ? FlashMode.on : FlashMode.off
    );
  };

  const takePicture = async () => {
    if (cameraRef.current && isCameraReady) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo);
      setPreviewVisible(true);
    }
  };

  const retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
  };

  return (
    <View style={styles.container}>
      {previewVisible && capturedImage ? (
        <CameraPreview photo={capturedImage} retakePicture={retakePicture} />
      ) : (
        <Camera
          ref={cameraRef}
          style={styles.camera}
          type={cameraType}
          flashMode={flashMode}
          onCameraReady={handleCameraReady}
        >
          <View style={styles.cameraControls}>
            <TouchableOpacity style={styles.flashButton} onPress={toggleFlashMode}>
              <Text style={styles.flashIcon}>
                {flashMode === FlashMode.on ? '⚡️ On' : '⚡️ Off'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.switchButton} onPress={switchCameraType}>
              <Text style={styles.switchText}>
                {cameraType === CameraType.back ? '🔄 Back' : '🔄 Front'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.captureButton} onPress={takePicture} />
          </View>
        </Camera>
      )}
    </View>
  );
};

const CameraPreview = ({ photo, retakePicture }) => (
  <View style={styles.previewContainer}>
    <ImageBackground source={{ uri: photo.uri }} style={styles.previewImage}>
      <TouchableOpacity onPress={retakePicture} style={styles.retakeButton}>
        <Text style={styles.retakeText}>Re-take</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
  cameraControls: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 20,
  },
  captureButton: {
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  flashButton: {
    position: 'absolute',
    left: 20,
    top: 40,
  },
  switchButton: {
    alignSelf: 'center',
  },
  switchText: {
    fontSize: 18,
    color: '#fff',
  },
  flashIcon: {
    fontSize: 18,
    color: '#fff',
  },
  previewContainer: {
    flex: 1,
  },
  previewImage: {
    flex: 1,
  },
  retakeButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  retakeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CameraApp;
