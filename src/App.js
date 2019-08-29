import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header/Header';

class App extends Component {
  state = {
      data: [],
    };
  
  componentDidMount() {
    fetch('http://www.omdbapi.com/?s=iron+man&apikey=3bb92b26')
      .then(response => response.json())
      .then(data => this.setState({ data: data.Search }));

  }
 


 render (){
   return (
     <React.Fragment>
<Header/>
   <ul>
     {this.state.data.map(item => {
      return <li key={item.imdbID}>{item.Title}<button onClick={this.addMovie}>+</button></li>
     })}
   </ul>
   </React.Fragment>
   )

 }
}
// function App() {
//   return (
//     <Header>
    
//     </Header>
//   );
// }

export default App;



