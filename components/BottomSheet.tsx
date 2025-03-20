import React, { useCallback, useMemo, useRef } from "react";
import { Image,Text, View, StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const BottomSheetPic = ({
  onClose,
  uri,
}: {
  onClose: () => void;
  uri: string;
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        onClose={onClose}
        snapPoints={["95%"]}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        handleIndicatorStyle={{ height: 0 }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <View style={{flex:1}}>
            <Text>hello</Text>
            {/* <Image source={{ uri: uri }} /> */}
          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    flex: 1,
  },
});

export default BottomSheetPic;
