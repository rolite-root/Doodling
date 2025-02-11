import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ImageBackground, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

const CameraApp = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    const requestCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      if (status !== 'granted') {
        Alert.alert('Camera Permission Denied', 'Please allow camera access in your device settings.');
      }
    };
    requestCameraPermission();
  }, []);

  const handleCameraReady = () => setIsCameraReady(true);

  const switchCameraType = () => {
    setCameraType((prevType) =>
      prevType === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
    );
  };

  const toggleFlashMode = () => {
    setFlashMode((prevFlashMode) =>
      prevFlashMode === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off
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

  if (hasPermission === null) return <Text>Requesting camera permission...</Text>;
  if (hasPermission === false) return <Text>No access to the camera</Text>;

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
                {flashMode === Camera.Constants.FlashMode.on ? '⚡️ On' : '⚡️ Off'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.switchButton} onPress={switchCameraType}>
              <Text style={styles.switchText}>
                {cameraType === Camera.Constants.Type.back ? '🔄 Back' : '🔄 Front'}
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
