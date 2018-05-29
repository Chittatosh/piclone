import React from 'react';
import PropTypes from 'prop-types';

import RmPicMutn from './RmPicMutn';

const propTypes = {
  id: PropTypes.string.isRequired,
  picUrl: PropTypes.string.isRequired,
  picTitle: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  deleteBool: PropTypes.bool.isRequired,
};

const PictureCard = ({ id, picUrl, picTitle, userName, deleteBool }) => (
  <div className="card">
    <img
      className="card-img-top"
      src={picUrl.replace('http://', 'https://')}
      alt={picTitle}
    />
    <div className="card-body">
      <h5 className="card-title">{picTitle}</h5>
      {deleteBool ? (
        <RmPicMutn {...{ id }} />
      ) : (
        <p className="card-text">{userName}</p>
      )}
    </div>
  </div>
);

PictureCard.propTypes = propTypes;

export default PictureCard;
