import React from 'react';

export default class DdResult extends React.Component {

  constructor(props) {
    super(props);
    this.state = {item: undefined };
  }

  render() {

    // Handle case where the response is not here yet
    if ( !this.state.item ) {
       return <div className="col-xs-12 loading-container"><span className="loading-container__loading-bg"></span></div>
    }

    return (
      <div className="row tab-pane" role="tabpanel" id={this.props.itemid}>
        <div className="track-result col-xs-12 col-sm-4 ">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>DD</th>
                <th>Häst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{this.state.item.winners[0].combination[0]}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>{this.state.item.winners[0].combination[1]}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-xs-12 col-md-6">
          <h3>Rätt kombination</h3>
          <span>{this.state.item.winners[0].combination[0]}-{this.state.item.winners[0].combination[1]}</span>
        </div>
        <div className="col-xs-12 col-md-6">
          <h3>Odds</h3>
          <span>{this.state.item.winners[0].odds}</span>
        </div>

      </div>
    );
  }

  componentDidMount() {
    var url = '/api/ddresult/' + this.props.itemid;

    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
      console.log(data);
        this.setState({item: data});

    }).catch((err) => {
        throw new Error(err);
    });
  }

}
