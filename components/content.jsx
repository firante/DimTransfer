import React from 'react';

import Table_Content from './table_content.jsx';

export default class Content extends React.Component {

  renderOffers() {
    console.log(this.props.currencyContent);
    let offers = this.props.currencyContent.filter((value, index) => {
      if(value.offerbid === '1') {
        return value;
      }
    });
    return <Table_Content table_data = {offers} />;

  }

  render() {
    return (
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <header className='text-center h3'> Offer </header>
          <section>
            { this.renderOffers() }
          </section>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
          <header className='text-center h3'> Bid </header>
          <section>
          </section>
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  currencyContent: React.PropTypes.array.isRequired,
}
