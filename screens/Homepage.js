import React, { useState } from "react";
import {Text,View,StyleSheet,Image,TouchableOpacity,TextInput,ScrollView,Dimensions,Modal,Button,} from "react-native";
import {Ionicons,FontAwesome5,Entypo,MaterialCommunityIcons,AntDesign,EvilIcons,} from "@expo/vector-icons";

export default function Homepage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [comment, setComment] = useState("");
  const [count, setCount] = useState(0);

  const sendComment = () => {
    console.log("Comment sent:", comment);
    setCount(count + 1);
    setComment("");
    setModalVisible(false);
  };

  const [modalVisible2, setModalVisible2] = useState(false);
  const [comment2, setComment2] = useState("");
  const [count2, setCount2] = useState(0);

  const sendComment2 = () => {
    console.log("Comment sent:", comment2);
    setCount2(count2 + 1);
    setComment2("");
    setModalVisible2(false);
  };

  const [modalVisible3, setModalVisible3] = useState(false);
  const [comment3, setComment3] = useState("");
  const [count3, setCount3] = useState(0);

  const sendComment3 = () => {
    console.log("Comment sent:", comment3);
    setCount3(count3 + 1);
    setComment3("");
    setModalVisible3(false);
  };

  const [likes, setLikes] = useState(0);
  const increaseLikes = () => setLikes(likes + 1);

  const [likes2, setLikes2] = useState(0);
  const increaseLikes2 = () => setLikes2(likes2 + 1);

  const [likes3, setLikes3] = useState(0);
  const increaseLikes3 = () => setLikes3(likes3 + 1);

  const screenHeight = Dimensions.get("window").height;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.slide}>
          <View style={styles.topview}>
            <Text style={styles.facebook}> WELCOME TO FACEBOOK</Text>
            <View style={styles.icons}>
              <Ionicons name="home" size={19} color="white" />
              <Ionicons name="people-sharp" size={19} color="white" />
              <Entypo name="message" size={19} color="white" />
              <Ionicons
                name="notifications-circle"
                size={19}
                color="white"
              />
              <FontAwesome5 name="tv" size={19} color="white" />
              <MaterialCommunityIcons
                name="town-hall"
                size={19}
                color="white"
              />
            </View>
          </View>

          <View style={styles.headerBox}>
            <View style={styles.status}>
              <Image
                source={require("../pexels-rebcenter-moscow-179322-576494.jpg")}
                style={styles.photo}
              />
            </View>
            <View style={styles.status}>
              <Image
                source={require("../pexels-bohlemedia-1884574.jpg")}
                style={styles.photo}
              />
            </View>
            <View style={styles.status}>
              <Image
                source={require("../pexels-vasiliy-skuratov-9515931-7500369.jpg")}
                style={styles.photo}
              />
            </View>
            <View style={styles.status}>
              <Image
                source={require("../pexels-mikhail-nilov-8108530.jpg")}
                style={styles.photo}
              />
            </View>
            <View style={styles.status}>
              <Image
                source={require("../pexels-yaroslav-shuraev-7688551.jpg")}
                style={styles.photo}
              />
            </View>
            <View style={styles.status}>
              <Image
                source={require("../Film Production.jpg")}
                style={styles.photo}
              />
            </View>
            <View style={styles.status}>
              <Image
                source={require("../pexels-urtimud-89-76108288-10038064.jpg")}
                style={styles.photo}
              />
            </View>
          </View>

          {/* First Section */}
            <View style={styles.section}>
              <View style={styles.personProfile}>
                <View style={styles.personPhoto}>
                  <Image
                    source={require("../pexels-carlos-santiago-421908853-15580192.jpg")}
                    style={styles.personImageStyles}
                  />
                </View>
                <View style={styles.personName}>
                  <Text style={styles.names}>Liam William Pagge</Text>
                  <Text style={styles.timePosted}>10 December 2015</Text>
                </View>
                <Text style={styles.threeDots}>...</Text>
              </View>

              <Text style={styles.smallPost}>
                Have You Ever Felt Like The Whole World Is Against You? 
                You Feel Like Everything You Touch Get Distroyed??  
              </Text>

              <View style={styles.imagePostContainer}>
                <Image
                  source={require("../pexels-rebcenter-moscow-179322-576494.jpg")}
                  style={styles.imagePost}
                />
              </View>
              <View style={styles.icons2}>
                <TouchableOpacity style={styles.button} onPress={increaseLikes2}>
                  <AntDesign name="like2" size={24} color="white" />
                  <Text style={styles.smallPost}>{likes2}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setModalVisible2(true)}
                >
                  <EvilIcons name="comment" size={24} color="white" />
                  <Text style={styles.smallPost}>{count2}</Text>
                </TouchableOpacity>

                <Modal
                  visible={modalVisible2}
                  onRequestClose={() => {
                    setModalVisible2(false);
                  }}
                >
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <TextInput
                        placeholder="Add your comment..."
                        value={comment2}
                        onChangeText={setComment2}
                        style={styles.modalInput}
                      />
                      <Button title="Send" onPress={sendComment2} />
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity style={styles.button}>
                  <FontAwesome5 name="share" size={24} color="#00ffee" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Second Section */}
            <View style={styles.section}>
              <View style={styles.personProfile}>
                <View style={styles.personPhoto}>
                  <Image
                    source={require("../Film Production.jpg")}
                    style={styles.personImageStyles}
                  />
                </View>
                <View style={styles.personName}>
                  <Text style={styles.names}>Leandro Malcom Silva</Text>
                  <Text style={styles.timePosted}>01 Mar 2024</Text>
                </View>
                <Text style={styles.threeDots}>...</Text>
              </View>

              <Text style={styles.smallPost}>One of my favourite collection by Brett Sayles.</Text>

              <View style={styles.imagePostContainer}>
                <Image
                  source={require("../pexels-brett-sayles-6424244.jpg")}
                  style={styles.imagePost}
                />
              </View>
              <View style={styles.icons2}>
                <TouchableOpacity style={styles.button} onPress={increaseLikes3}>
                  <AntDesign name="like2" size={24} color="white" />
                  <Text style={styles.smallPost}>{likes3}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setModalVisible3(true)}
                >
                  <EvilIcons name="comment" size={24} color="white" />
                  <Text style={styles.smallPost}>{count3}</Text>
                </TouchableOpacity>

                <Modal
                  visible={modalVisible3}
                  onRequestClose={() => {
                    setModalVisible3(false);
                  }}
                >
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <TextInput
                        placeholder="Add your comment..."
                        value={comment3}
                        onChangeText={setComment3}
                        style={styles.modalInput}
                      />
                      <Button title="Send" onPress={sendComment3} />
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity style={styles.button}>
                  <FontAwesome5 name="share" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#080808",
      alignItems: "center",
      justifyContent: "center",
    },
    scrollView: {
      backgroundColor: "00ffee",
      width: "100%",
    },
    slide: {
      flex: 1,
    },
    topview: {
      width: "100%",
      height: 60,
      backgroundColor: "black",
      paddingHorizontal: 10,
      justifyContent: "center",
    },
    icons: {
      flexDirection: "row",
      justifyContent: "space-around",
      borderTopWidth: 1,
      borderTopColor: "rgba(250, 245, 245, 0.726)",
      paddingTop: 5,
    },
    facebook: {
      fontSize: 24,
      color: "white",
      textAlign: "center",
    },
    headerBox: {
      height: 100,
      flexDirection: "row",
      paddingHorizontal: 10,
      marginTop: 10,
    },
    status: {
      width: 70,
      height: 80,
      marginRight: 10,
      borderWidth: 1,
      borderColor: "blue",
      borderRadius: 10,
    },
    photo: {
      width: "100%",
      height: "100%",
      borderRadius: 10,
    },
    section: {
      padding: 20,
    },
    personProfile: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    personPhoto: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    personImageStyles: {
      width: "100%",
      height: "100%",
      borderRadius: 20,
    },
    personName: {
      flex: 1,
      color: '#00ffee',
    },
    names: {
      fontWeight: "bold",
      fontSize: 16,
      color: "white",
    },
    timePosted: {
      color: "#8a8a8a",
      fontSize: 12,
    },
    threeDots: {
      fontSize: 24,
      color: "white",
    },
    smallPost: {
      color: "white",
      marginBottom: 10,
    },
    post: {
      backgroundColor: "#333",
      padding: 10,
      borderRadius: 5,
      marginBottom: 20,
    },
    textPost: {
      color: "#00ffee",
      fontSize: 16,
    },
    icons2: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
    },
    button: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.315)",
      borderRadius: 10,
      padding: 5,
    },
    imagePostContainer: {
      width: "100%",
      height: 200,
      marginTop: 10,
      borderRadius: 10,
      overflow: "hidden",
    },
    imagePost: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalContent: {
      backgroundColor: "#00ffee",
      padding: 20,
      borderRadius: 10,
      width: "80%",
    },
    modalInput: {
      backgroundColor: "#00ffee",
      marginBottom: 10,
      borderRadius: 5,
      paddingHorizontal: 10,
    },
  });

