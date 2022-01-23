import React from 'react';

function NavTabs(props) {
  const tabs = ['About', 'Portfolio', 'Resume', 'Contact'];
  return (
    <div>
      <h1>Welcome to Zachary McCollum's Portfolio!</h1>
    <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li className="nav-item" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default NavTabs;
