import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...restProps }) => (
    <CustomButtonContainer {...restProps}>{children}</CustomButtonContainer>
);

export default CustomButton;