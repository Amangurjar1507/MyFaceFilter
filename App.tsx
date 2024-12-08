// import * as React from 'react';
// import BanubaSdkManager, {EffectPlayerView} from '@banuba/react-native';
// import {
//   View,
//   StyleSheet,
//   FlatList,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import imageIndex from './src/assets/imageIndex';

// class App extends React.Component {
//   ep: any;

//   constructor(props: {} | Readonly<{}>) {
//     super(props);
//     this.state = {
//       data: [
//         {key: '1', filter: 'effects/TrollGrandma', image: imageIndex.preview},
//         {key: '2', filter: 'Item 2', image: imageIndex.dog},
//         {key: '3', filter: 'Item 3', image: imageIndex.emoji},
//         {key: '4', filter: 'Item 4', image: imageIndex.go},
//       ],
//       SaveFilter: '',
//     };
//     BanubaSdkManager.initialize(
//       [],
//       'weluY+PUOlBCgUmT6U1eozRKfl6KoEI4M7W1GH3HmBnIrkvZ5UFkfyXBArfdDPJ+ruILLhDjOrIbQji4RQLoFqZ6zIvTZOOVAcdrM/qGgzdNiv1jLHq12mexlUOOm7mxDBeuccYFsN5AggiYDzhEQAD42AxMTvFOvMP+3tmO8h9yOzUbFjK4AlOFL0jWE703NrxoOfEsutTee43r3C/OZAMrfFD8RrjuWUODnnrSr0y7GK4/jd6vOscDtoxZp2Pp2Hs/r+Id2/7WwqUx4N3+g75l5B1UwBsQv73urcNXlx4AeW+3p5opSq9L4TGg0+ZrRBvzffK5uUkZyaDTNmyca7Bxn4Xq9RAcNUtdijPckDB9Z1kGxCTsnEtYif1xEk0tEfAfowi5yzbo7N2XajwXILQu8/PoWZ/nRxZ4o59cfcl41AEOhwmc0o7Tek5pHZ/RKkLO4rdBK9vtONV+0hsmnpXzoWRg4curzydcK+E+8VW3vUtvRFjRcS900u0Ot1JZWXhfB5x/4hTnFKzez3PKcvLzahAgNV1JNsg=',
//     );
//     this.ep = React.createRef<typeof EffectPlayerView>();
//   }
//   renderItem = ({item}) => {
//     return (
//       <TouchableOpacity
//         onPress={() => {
//           this.setState({SaveFilter: item.filter});
//         }}
//         style={styles.itemContainer}>
//         <Image style={styles.image} resizeMode="contain" source={item.image} />
//       </TouchableOpacity>
//     );
//   };
//   render(): React.ReactNode {
//     return (
//       <View style={styles.container}>
//         <EffectPlayerView style={{flex: 1}} ref={this.ep} />
//         <FlatList
//           horizontal={true}
//           style={{
//             position: 'absolute',
//             height: 100,
//             bottom: 0,
//           }}
//           data={this.state.data}
//           renderItem={this.renderItem}
//           keyExtractor={item => item.key}
//         />
//       </View>
//     );
//   }
//   componentDidMount(): void {
//     BanubaSdkManager.attachView(this.ep.current._nativeTag);
//     BanubaSdkManager.openCamera();
//     BanubaSdkManager.startPlayer();
//     BanubaSdkManager.loadEffect(this.state.SaveFilter);
//   }

//   componentWillUnmount(): void {
//     BanubaSdkManager.stopPlayer();
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#eaeaea',
//   },
//   title: {
//     color: '#20232a',
//     textAlign: 'center',
//     fontSize: 15,
//     fontWeight: 'bold',
//   },
//   itemContainer: {
//     height: 50,
//     width: 50,
//     borderWidth: 5,
//     borderColor: 'white',
//     borderRadius: 30,
//     margin: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     height: 50,
//     width: 50,
//   },
// });
// export default App;

import * as React from 'react';
import BanubaSdkManager, {EffectPlayerView} from '@banuba/react-native';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import imageIndex from './src/assets/imageIndex';

class App extends React.Component {
  ep: React.RefObject<EffectPlayerView>;

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      data: [
        {key: '1', filter: 'effects/TrollGrandma', image: imageIndex.preview},
        {
          key: '2',
          filter: 'effects/Afro',
          image: imageIndex.dog,
        },
        {key: '3', filter: 'effects/CubemapEverest', image: imageIndex.emoji},
        {key: '4', filter: 'effects/PoliceMan', image: imageIndex.go},
        {key: '5', filter: 'effects/Spider1', image: imageIndex.emoji},
        // Add more filter items
      ],
      selectedFilter: null, // Track the selected filter
    };
    BanubaSdkManager.initialize(
      [],
      'weluY+PUOlBCgUmT6U1eozRKfl6KoEI4M7W1GH3HmBnIrkvZ5UFkfyXBArfdDPJ+ruILLhDjOrIbQji4RQLoFqZ6zIvTZOOVAcdrM/qGgzdNiv1jLHq12mexlUOOm7mxDBeuccYFsN5AggiYDzhEQAD42AxMTvFOvMP+3tmO8h9yOzUbFjK4AlOFL0jWE703NrxoOfEsutTee43r3C/OZAMrfFD8RrjuWUODnnrSr0y7GK4/jd6vOscDtoxZp2Pp2Hs/r+Id2/7WwqUx4N3+g75l5B1UwBsQv73urcNXlx4AeW+3p5opSq9L4TGg0+ZrRBvzffK5uUkZyaDTNmyca7Bxn4Xq9RAcNUtdijPckDB9Z1kGxCTsnEtYif1xEk0tEfAfowi5yzbo7N2XajwXILQu8/PoWZ/nRxZ4o59cfcl41AEOhwmc0o7Tek5pHZ/RKkLO4rdBK9vtONV+0hsmnpXzoWRg4curzydcK+E+8VW3vUtvRFjRcS900u0Ot1JZWXhfB5x/4hTnFKzez3PKcvLzahAgNV1JNsg=',
    );
    this.ep = React.createRef<EffectPlayerView>();
  }

  renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({selectedFilter: item.filter}, () => {
            // Load the selected filter when state updates
            BanubaSdkManager.loadEffect(this.state.selectedFilter);
          });
        }}
        style={styles.itemContainer}>
        <Image style={styles.image} resizeMode="contain" source={item.image} />
      </TouchableOpacity>
    );
  };

  componentDidMount(): void {
    BanubaSdkManager.attachView(this.ep.current._nativeTag);
    BanubaSdkManager.openCamera();
    BanubaSdkManager.startPlayer();
  }

  componentWillUnmount(): void {
    BanubaSdkManager.stopPlayer();
  }

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <EffectPlayerView style={{flex: 1}} ref={this.ep} />
        <FlatList
          horizontal={true}
          style={{
            position: 'absolute',
            height: 100,
            bottom: 0,
          }}
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.key}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
  },
  itemContainer: {
    height: 50,
    width: 50,
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 30,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 50,
    width: 50,
  },
});

export default App;
