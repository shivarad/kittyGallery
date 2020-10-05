import React ,{Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components//CardList/CardList';
import Searchbox from '../components/Searchbox/Searchbox';
import Scroll from '../components/Scroll/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import 'tachyons';
import './App.css';

import {setSearchField,requestKittens} from '../actions';

// const CATS=[{id:1,name:'kitty',age:'12months'},{id:2,name:'looli',age:'2months'},
// {id:3,name:'pury',age:'6months'},{id:4,name:'pussy',age:'10months'},{id:5,name:'kittys',age:'12months'},{id:6,name:'loolis',age:'2months'},
// {id:7,name:'purys',age:'6months'},{id:8,name:'pussys',age:'10months'}];
const mapStateToProps=(state)=>{
  return {
    searchField:state.searchKittrns.searchField,   //states are gather here
    cats:state.requestKittens.cats,
    isPending:state.requestKittens.isPending,
    errorMessage:state.requestKittens.errorMessage
  }
}

const mapDispatchToProps=(dispatch)=>{      //actions are gather here
 return{
  onSearchChange:(event)=>dispatch(
    setSearchField(event.target.value)),
  onRequestKittens:()=>dispatch(requestKittens)
 }
}
class App extends Component {

  // constructor(){
  //   super();
  //   this.state={
  //     cats:[]

  //   }
  // }   //********no need to constructor because we dont need states anymore*/

  //its a react lifesycle methode so no need to bind 'this'  :https://reactjs.org/docs/react-component.html
componentDidMount(){
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(users=>{this.setState({cats:users})});
    this.props.onRequestKittens();
}

  // //use either arrow func or bind 'this' to method for not having problem with using 'this'
  // onSearchChange=(event)=>{
  //   this.setState({
  //     searchfield:event.target.value, //changing cats as state here slows down the app!!!!
  //   });
  // }


render(){

  const {searchField,onSearchChange,cats,isPending}=this.props;

  const filteredCats=cats.filter(cat=>
       cat.username.toLowerCase().includes(searchField.toLowerCase())
    );

// //in case fetching takes time... (if else checking for length)
// return !cats.length?
//  //if lenght===0

return isPending?
    <h2 className='f1 gold'>loading...</h2>:  
(
  //else
    <div className='tc'>                       
          <h2 className=' f1 gold'>Kitty Gallery</h2>
          <Searchbox searchChange={onSearchChange}/>

          <Scroll>
            <ErrorBoundary>
              <CardList CATS={filteredCats}/>
            </ErrorBoundary>
          </Scroll>
    </div>
  );
}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
