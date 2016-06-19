import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xs-offset-1
        col-sm-offset-1 col-md-offset-1 col-lg-offset-1'>

        <header className='text-center h3'></header>

        <nav>
          <ul className='nav nav-tabs' role='tablist'>
            <li role='presentation' className='article'>
              <a href="#dolar" aria-controls='dolar' role='tab' data-toggle='tab'> Долар </a>
            </li>
            <li role='presentation'>
              <a href="#euro" aria-controls='euro' role='tab' data-toggle='tab'> Євро </a>
            </li>
            <li role='presentation'>
              <a href="#grn" aria-controls='grn' role='tab' data-toggle='tab'> Гривня </a>
            </li>
            <li role='presentation'>
              <a href="#zlotiy" aria-controls='zlotiy' role='tab' data-toggle='tab'> Злотий </a>
            </li>
          </ul>
        </nav>

        <section>
          <div className="tab-content">
            <div role='tabpanel' className="tab-pane article" id='dolar'> Долар </div>
            <div role='tabpanel' className="tab-pane" id='euro'> Євро </div>
            <div role='tabpanel' className="tab-pane" id='grn'> Гривня </div>
            <div role='tabpanel' className="tab-pane" id='zlotiy'> Злотий </div>
          </div>
        </section>

      </div>
    );
  }
}
