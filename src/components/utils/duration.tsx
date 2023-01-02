import React from 'react';

export default ({begin}) => (<span>{Math.floor((Date.now() - (new Date(begin)))/ 1000 / 60 / 60 / 24 / 365)}</span>);
