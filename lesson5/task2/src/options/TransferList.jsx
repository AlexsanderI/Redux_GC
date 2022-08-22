import React from 'react';
import AvailableOptions from './AvailableOptions';
import SelectetOptions from './SelectetOptions';

const TransferList = () => (
  <div className="transfer-list">
    <AvailableOptions title="Availeble options" />
    <SelectetOptions title="Selected options" />
  </div>
);

export default TransferList;
