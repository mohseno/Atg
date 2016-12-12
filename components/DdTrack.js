import React from 'react';

class DdTrack extends React.Component {

    render() {
        const data = this.props.item;
        var d = new Date(data.startTime).toLocaleDateString();
        return (
          <div className="col-xs-12 col-md-2 track-item" >
            <a href={"#" + data.id} data-toggle="tab">
              <p className="track-item__header">{data.tracks[0].name}</p>
              <p>{d}</p>
            </a>
          </div>
        )
    }
}

export default DdTrack;
