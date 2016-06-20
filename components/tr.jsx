import React from 'react';

import Td from './td.jsx';

export default class Tr extends React.Component {

  renderTr() {
    console.log(this.props.type);
    if(this.props.type === 'header') {
      console.log(this.props.values)
      let tds = [];
      tds.push(<td className='small nopadding text-center'></td>);
      this.props.values.map((value, index) => {
        return tds.push(<Td type='header' value={value} key={index} />);
      });
      return tds;
    } else {
      let tds = [];
      tds.push(<td className='small nopadding text-center tdHover'>{ this.props.values[0].arcdate }</td>)
      this.props.values.map((value, index) => {
        return tds.push(<Td type='body' value={value} key={index} />);
      });
      return tds;
    }
  }

  render() {
    return (
      <tr className='nopadding'>
        { this.renderTr() }
      </tr>
    );
  }
}

Tr.propTypes = {
  type: React.PropTypes.string.isRequired,
  values: React.PropTypes.array.isRequired,
}
