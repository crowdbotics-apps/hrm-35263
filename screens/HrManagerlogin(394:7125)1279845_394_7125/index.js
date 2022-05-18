import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_394_7126} />
      <View style={styles.View_394_7127}>
        <Text style={styles.Text_394_7127}>|</Text>
      </View>
      <View style={styles.View_394_7128}>
        <Text style={styles.Text_394_7128}>Email</Text>
      </View>
      <View style={styles.View_394_7129}>
        <Text style={styles.Text_394_7129}>Phone </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1a7/b46d/a74864c10fcbc0fa04bbc8769d57234f"
        }}
        style={styles.ImageBackground_394_7130}
      />
      <View style={styles.View_394_7131} />
      <View style={styles.View_394_7132}>
        <Text style={styles.Text_394_7132}>|</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_394_7134}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("394_7138"))
        }
      />
      <View style={styles.View_394_7135}>
        <Text style={styles.Text_394_7135}>Enter</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_394_7126: {
    width: wp("23%"),
    height: hp("7%"),
    top: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    backgroundColor: "rgba(204, 210, 227, 1)",
    borderColor: "rgba(112, 112, 112, 1)",
    borderWidth: 1
  },
  View_394_7127: {
    width: wp("0%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    justifyContent: "flex-start"
  },
  Text_394_7127: {
    color: "rgba(23, 25, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_394_7128: {
    width: wp("2%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    justifyContent: "flex-start"
  },
  Text_394_7128: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_394_7129: {
    width: wp("3%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    justifyContent: "flex-start"
  },
  Text_394_7129: {
    color: "rgba(23, 25, 48, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_394_7130: {
    width: wp("11%"),
    height: hp("21%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    resizeMode: "cover"
  },
  View_394_7131: {
    width: wp("23%"),
    height: hp("7%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    backgroundColor: "rgba(204, 210, 227, 1)",
    borderColor: "rgba(112, 112, 112, 1)",
    borderWidth: 1
  },
  View_394_7132: {
    width: wp("0%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    justifyContent: "flex-start"
  },
  Text_394_7132: {
    color: "rgba(23, 25, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_394_7134: {
    width: wp("23%"),
    height: hp("7%"),
    top: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    borderColor: "rgba(112, 112, 112, 1)",
    borderWidth: 1
  },
  View_394_7135: {
    width: wp("2%"),
    top: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    justifyContent: "flex-start"
  },
  Text_394_7135: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
