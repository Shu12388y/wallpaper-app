import { View, Text, Button, Image } from "react-native";
import React, { useState } from "react";
import BottomSheetPic from "@/components/BottomSheet";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWallpapers } from "@/hooks/useWallpaper";
import WallpaperCard from "@/components/WallpaperCard";

const Explore = () => {
  const [view, setView] = useState(false);
  const [imgUri, setImgUri] = useState("");
  const data = useWallpapers();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Image
          style={{ height: 100 }}
          source={{
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/MREkvC3rTL-RML1bO1mCLQ",
          }}
        />
        <Text
          style={{
            textAlign: "left",
            fontSize: 25,
            marginLeft: 10,
            marginTop: 10,
          }}
        >
          Explore page
        </Text>
      </View>

      <View
        style={{
          flex: 0.5,
          marginTop: 10,
          flexDirection: "column",
        }}
      >
        {data.map((ele, index) => {
          return (
              <View key={index + "-" + index} style={{flex:1}}>
                <WallpaperCard  uri={ele.uri} />
                <Button
                  title="View"
                  onPress={() => {
                    setView(true);
                    setImgUri(ele.uri);
                  }}
                />
              </View>
          );
        })}
      </View>
      <View>
        {view && <BottomSheetPic uri={imgUri} onClose={() => setView(false)} />}
      </View>
    </SafeAreaView>
  );
};

export default Explore;
