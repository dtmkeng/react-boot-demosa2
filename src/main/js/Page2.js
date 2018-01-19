var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');
var client = require('./client');

export default class Page2 extends React.Component{
popPage() {
        this.props.navigator.popPage();
}
renderToolbar(route, navigator){
        const backButton =  <Ons.BackButton onClick={this.popPage.bind(this)}>Back</Ons.BackButton>
        
        return (
          <Ons.Toolbar>
            <div className='right'>
              <Ons.ToolbarButton >
                <Ons.Icon icon='ion-navicon, material:md-menu' />
              </Ons.ToolbarButton>
            </div>
            <div className='left'>{backButton}</div>
            <div className='center'>Page2</div>
          </Ons.Toolbar>
        );
      }
    render() {
      return (
        <Ons.Page renderToolbar={this.renderToolbar.bind(this)} >
          <div style={{ textAlign: 'center' }}>
            <h1>Page 2</h1>
          </div>
        </Ons.Page>
      );
    }
  } 