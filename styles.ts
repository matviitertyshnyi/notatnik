import { StyleSheet, StatusBar } from 'react-native';

export const useStyles = () => {
    
    const styles = StyleSheet.create({
       container: {
        backgroundColor:"#e6e6ec",
        height: "100%",
        width: "100%",
       },
       header: {
        backgroundColor:"#e6e6ec",
        padding: "3%",
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
       },
       note: {
       width: "95%",
       height: 100,
       marginLeft: "auto",
       marginRight: "auto",
       backgroundColor:"#FFF",
       padding: "3%",
       marginTop: "2%",
       borderRadius: 10,
       borderStyle: 'solid',
       borderColor: "#000000",
       borderWidth: 0,
      },
      noteText:{
        fontSize: 25,
        fontFamily: 'lucida grande, tahoma, verdana, arial, sans-serif',
        color: "black",
      },
      addnote:{
        width: "25%",
        aspectRatio: 1/1,
        position : "absolute",
        bottom:20,
        right:20,
        backgroundColor: "#6f6f6f",
        zIndex:2,
        borderRadius:100,
      },
      scrollView: {
        width:"100%",
      },
      SAV: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
      
   });
    return styles;
}