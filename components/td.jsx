import React from 'react';

export default class Td extends React.Component {

  renderTd() {
    if(this.props.type === 'header') {

      return (
        <td className='text-center small nopadding'>
          { this.props.value.days_from } - { this.props.value.days_till }
        </td>
      );
    } else {
      return (
        <td className='text-center small nopadding tdHover'>
          { this.props.value.transfertPrice }
        </td>
      );
    }
  }

  render() {
    return ( this.renderTd() ) ;
  }
}

Td.propTypes = {
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.object.isRequired,
}
