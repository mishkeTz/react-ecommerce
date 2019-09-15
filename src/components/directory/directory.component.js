import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { selectDirectorySection } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {sections.map(({ id, ...restProps }) => <MenuItem key={id} {...restProps} />)}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);