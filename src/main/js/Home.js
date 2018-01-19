var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');
import Page2 from './Page2'
export default class Home extends React.Component{
pushPage() {
    this.props.navigator.pushPage({ component: Page2, props: { key: 'Page2' } });
  }
  renderToolbar(route, navigator){
    // const backButton =  <Ons.BackButton onClick={this.popPage.bind(this)}>Back</Ons.BackButton>
    
    return (
      <Ons.Toolbar>
        <div className='right'>
          <Ons.ToolbarButton >
            <Ons.Icon icon='ion-navicon, material:md-menu' />
          </Ons.ToolbarButton>
        </div>
        <div className='center'>Home</div>
        {/* <div className='left'>{backButton}</div> */}
      </Ons.Toolbar>
    );
  }
    render() {
      return (
        <Ons.Page renderToolbar={this.renderToolbar.bind(this)}>
          <div style={{ textAlign: 'center' }}>
             <h1>Home</h1>
             <Ons.Button onClick={this.pushPage.bind(this)}>Page</Ons.Button>
          </div>
        </Ons.Page>
      );
    }
  } 