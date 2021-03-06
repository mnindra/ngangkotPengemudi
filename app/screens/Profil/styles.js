import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  topSection: {
    backgroundColor: '#5677e7',
    paddingTop: 20,
    paddingBottom: 20,
  },
  topSectionText: {
    textAlign: 'center',
    color: '#fff'
  },
  centerSection: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
  },
  centerSectionText: {
    color: '#3d3d3d'
  },
  bottomSection: {
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
  },
  image: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 10,
    width: 200,
    height: 200,
    borderRadius: 120
  },
  ratingContent: {
    width: '40%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop:10
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;