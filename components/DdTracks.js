import React from 'react';
import DdTrack from './DdTrack';
import DdResult from './DdResult';

class DdTracks extends React.Component {
    constructor(props) {
      super(props);
      this.state = {items: []};
    }

    render() {
        return (
          <div className="tracks-container">
            <div className="tracks">
              {this.state.items.map((item) =>
                <DdTrack item={item} />
              )}
            </div>
            <DdResult itemid={"dd_2016-12-11_9_9"} />
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
