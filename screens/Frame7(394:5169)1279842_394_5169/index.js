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
      <View style={styles.View_394_5170} />
      <TouchableOpacity
        style={styles.TouchableOpacity_394_5171}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("394_3537"))
        }
      >
        <View style={styles.View_394_5172} />
        <View style={styles.View_394_5173}>
          <Text style={styles.Text_394_5173}>Employees</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b681/ef55/a81972d6b791bb668de544af8b6a16c0"
          }}
          style={styles.ImageBackground_394_5174}
        />
      </TouchableOpacity>
      <View style={styles.View_394_5177}>
        <View style={styles.View_394_5178} />
        <View style={styles.View_394_5179}>
          <Text style={styles.Text_394_5179}>Calendar</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a8f/ab88/9a253bdca5eb004eb54b81b4ec8e66cc"
          }}
          style={styles.ImageBackground_394_5180}
        />
      </View>
      <View style={styles.View_394_5185}>
        <View style={styles.View_394_5186} />
        <View source={{ uri: "null" }} style={styles.View_394_5187} />
        <View style={styles.View_394_5188}>
          <Text style={styles.Text_394_5188}>Dashboard</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_394_5189}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("394_5530"))
        }
      >
        <View style={styles.View_394_5190} />
        <View style={styles.View_394_5192}>
          <Text style={styles.Text_394_5192}>send notifications</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/526c/6506/ae74260944660d3c9b2dc5e14c3ec49b"
          }}
          style={styles.ImageBackground_394_5368}
        />
      </TouchableOpacity>
      <View style={styles.View_394_5193}>
        <TouchableOpacity
          style={styles.TouchableOpacity_394_5194}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("394_6764"))
          }
        />
        <View style={styles.View_394_5195}>
          <Text style={styles.Text_394_5195}>Logout</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1875/36d0/66b6883c2f1e40a9e4b744ac83561cc9"
          }}
          style={styles.ImageBackground_394_5196}
        />
      </View>
      <View style={styles.View_394_5200}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7766/9c02/df259722cfef42b097e3d9ad669f5f9e"
          }}
          style={styles.ImageBackground_394_5201}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d95/4950/f3ba82ed70eb1be24928e7037f3c0a88"
          }}
          style={styles.ImageBackground_394_5202}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("140%") },
  View_394_5170: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("140%"),
    minHeight: hp("140%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(98, 151, 229, 1)"
  },
  TouchableOpacity_394_5171: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%")
  },
  View_394_5172: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 110, 215, 1)"
  },
  View_394_5173: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_394_5173: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_394_5174: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_394_5177: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%")
  },
  View_394_5178: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(77, 133, 215, 1)"
  },
  View_394_5179: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_394_5179: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_394_5180: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_394_5185: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%")
  },
  View_394_5186: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(77, 133, 215, 1)"
  },
  View_394_5187: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  View_394_5188: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_394_5188: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_394_5189: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%")
  },
  View_394_5190: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(77, 133, 215, 1)"
  },
  View_394_5192: {
    width: wp("62%"),
    minWidth: wp("62%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_394_5192: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_394_5368: {
    width: wp("12%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_394_5193: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("130%")
  },
  TouchableOpacity_394_5194: {
    width: wp("97%"),
    minWidth: wp("97%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(77, 133, 215, 1)"
  },
  View_394_5195: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_394_5195: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_394_5196: {
    width: wp("10%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_394_5200: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  ImageBackground_394_5201: {
    width: wp("28%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_394_5202: {
    width: wp("18%"),
    height: hp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
