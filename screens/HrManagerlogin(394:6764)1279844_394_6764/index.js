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
      <View style={styles.View_394_7112} />
      <View style={styles.View_394_7114}>
        <Text style={styles.Text_394_7114}>Ben dover</Text>
      </View>
      <View style={styles.View_394_7115}>
        <Text style={styles.Text_394_7115}>Username</Text>
      </View>
      <View style={styles.View_394_7116}>
        <Text style={styles.Text_394_7116}>Password</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1a7/b46d/a74864c10fcbc0fa04bbc8769d57234f"
        }}
        style={styles.ImageBackground_394_7119}
      />
      <View style={styles.View_394_7120} />
      <View style={styles.View_394_7121}>
        <Text style={styles.Text_394_7121}>**********************</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_394_7122}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("394_7125"))
        }
      >
        <Text style={styles.Text_394_7122}>Forgot password?</Text>
      </TouchableOpacity>
      <View style={styles.View_394_7123} />
      <View style={styles.View_394_7124}>
        <Text style={styles.Text_394_7124}>Login</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("140%") },
  View_394_7112: {
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
  View_394_7114: {
    width: wp("4%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    justifyContent: "flex-start"
  },
  Text_394_7114: {
    color: "rgba(23, 25, 48, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_394_7115: {
    width: wp("4%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    justifyContent: "flex-start"
  },
  Text_394_7115: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_394_7116: {
    width: wp("4%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    justifyContent: "flex-start"
  },
  Text_394_7116: {
    color: "rgba(23, 25, 48, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_394_7119: {
    width: wp("11%"),
    height: hp("21%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    resizeMode: "cover"
  },
  View_394_7120: {
    width: wp("23%"),
    height: hp("7%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    backgroundColor: "rgba(204, 210, 227, 1)",
    borderColor: "rgba(112, 112, 112, 1)",
    borderWidth: 1
  },
  View_394_7121: {
    width: wp("15%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    justifyContent: "flex-start"
  },
  Text_394_7121: {
    color: "rgba(23, 25, 48, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_394_7122: {
    width: wp("7%"),
    top: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    justifyContent: "flex-start"
  },
  Text_394_7122: {
    color: "rgba(23, 25, 48, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_394_7123: {
    width: wp("23%"),
    height: hp("7%"),
    top: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    borderColor: "rgba(112, 112, 112, 1)",
    borderWidth: 1
  },
  View_394_7124: {
    width: wp("2%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    justifyContent: "flex-start"
  },
  Text_394_7124: {
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
