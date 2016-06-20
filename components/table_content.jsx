import React from 'react';

import Tr from './tr.jsx';

export default class Table_Content extends React.Component {

  renderHeader() {
    let singleData = new Date(this.props.table_data[0].arcdate);
    let dat = this.props.table_data.filter((value, index) => {
      if(+new Date(value.arcdate) === +singleData) {
        return value;
      }
    });
    return  <Tr type='header' values= {dat} />;
  }

  renderBody() {
    let singleData = null;
    let trs = [];

    this.props.table_data.forEach((value) => {
      if (+singleData != +new Date(value.arcdate)) {
        singleData = new Date(value.arcdate);
        let tr = this.props.table_data.filter((value) => {
          if(+singleData == +new Date(value.arcdate)) {
            return value;
          }
        });
        trs.push(<Tr type='body' values={tr} />)
      }
    });
    return trs;
  }

  render() {
    if(this.props.table_data.length <= 0) { return null; }
    return (
      <table className='table nopadding table-hover'>
        <thead> { this.renderHeader() } </thead>
        <tbody>
          { this.renderBody() }
        </tbody>
      </table>
    );
  }
}

Table_Content.propTypes = {
  table_data: React.PropTypes.array.isRequired,
}
