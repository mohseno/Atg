import React from 'react';
import DdTrack from './DdTrack';

class DdTracks extends React.Component {
    constructor(props) {
      super(props);
      this.state = {items: []};
    }

    render() {
        return (
          <div className="tracks">
            {this.state.items.map((item) =>
              <DdTrack item={item} />
            )}
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
