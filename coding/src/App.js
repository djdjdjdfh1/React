import logo from './logo.svg';
import './App.css';

import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'read',
      subject:{title:"Web", sub: "World Wide Web!"},
      welcome:{title:"Welcome", desc:"Hello React!!"},
      contents: [
        {id:1, title: "HTML", desc: "HTML is for information"},
        {id:2, title: "CSS", desc: "CSS is for design"},
        {id:3, title: "JavaScript", desc: "JavaScript is for interactive"}
      ]
    }
  }
  
  render() {
    console.log("App render");
    var _title, _desc = null;
    if(this.state.mode === "welcome"){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === "read"){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
      <Subject
        title={this.state.subject.title}
        sub={this.state.subject.sub}
        onChangePage={function() {
          this.setState({mode:"welcome"});
        }.bind(this)}
      />
      <TOC 
      onChangePage={function() {
        alert("hi");  
      }.bind(this)} 
      data={this.state.contents}
      />
      <Content title={_title} desc={_desc} />
    </div>
  );
 }
}

export default App;
