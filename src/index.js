import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

//Components

import Header from "./components/header";
import NewsList from "./components/news_list";
//import NewsItem from "./components/news_list_item";

console.log(JSON);

class App extends Component {

   //gets passed to news list component as props
    state = {
        news:JSON,
        filtered: []
    }


    getkeyWord = (event) =>{
        //console.log(event.target.value)
        let keyword = event.target.value;
        let filtered = this.state.news.filter((item)=> {
            return item.title.indexOf(keyword) > -1
        });

        this.setState({
            filtered
        })
        //console.log(filtered);
    };
    render(){
       // console.log(this.state.news)
         return (
            <div>
                <Header keywords={this.getkeyWord}/>
               <NewsList news={this.state.filtered.length === 0 ? this.state.news: this.state.filtered }/>
            </div>
        )
    }

}

ReactDOM.render(<App/>, document.querySelector('#root'));