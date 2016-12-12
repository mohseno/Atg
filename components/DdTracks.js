import React from 'react';
import DdTrack from './DdTrack';
import DdResult from './DdResult';

class DdTracks extends React.Component {
    constructor(props) {
      super(props);
      this.state = {items: undefined};
    }

    render() {
        if ( !this.state.items ) {
           return <div className="col-xs-12 loading-container"><span className="loading-container__loading-bg"></span></div>
        }
        return (
          <div className="tracks-container">
            <div className="tracks">
              {this.state.items.map((item) =>
                <DdTrack item={item} handler={ this.handleClick } />
              )}
            </div>
            <div className="tab-content">
              {this.state.items.map((item) =>
                <DdResult itemid={item.id} />
              )}

            </div>
          </div>
      );
    }

    componentDidMount() {
      fetch('/api/ddresults').then((response) => {
          return response.json();
      }).then((data) => {
          this.setState({items: data});
      }).catch((err) => {
          throw new Error(err);
      });
    }
}

export default DdTracks;
