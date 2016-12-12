import React from 'react';

export default class DdResult extends React.Component {
  render() {
    const leg1 = data[this.props].combination[0];
    const leg2 = data[this.props].combination[1];
    const odds = data[this.props].odds;
    return (
      <table>
        <thead>
          <tr>
            <th>DD</th>
            <th>Häst</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{leg1}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{leg2}</td>
          </tr>
        </tbody>
      </table>

      <div className="col-xs-12 col-md-6">
        <h3>Rätt kombination</h3>
        <span>{leg1}-{leg2}</span>
      </div>
      <div className="col-xs-12 col-md-6">
        <h3>Odds</h3>
        <span>{odds}</span>
      </div>
    );
  }
}
