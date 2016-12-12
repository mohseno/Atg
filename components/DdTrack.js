import React from 'react';

class DdTrack extends React.Component {
    render() {
        const data = this.props.item;
        return (
          <div className="col-xs-12 col-md-2">
              <p>{data.tracks[0].name}</p>
              <p>Datum: {data.startTime}</p>
          </div>
        )
    }
}

export default DdTrack;
