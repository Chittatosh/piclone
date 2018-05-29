import React from 'react';
import { gql } from 'apollo-boost';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';

import { ALL_PIC_LIST, ME_QUERY } from '../client/constants';

const propTypes = {
  id: PropTypes.string.isRequired,
};

const updateFunc = (cache, { data: { removePicture } }) => {
  const { fullPicList } = cache.readQuery({ query: ALL_PIC_LIST });
  cache.writeQuery({
    query: ALL_PIC_LIST,
    data: {
      fullPicList: fullPicList.filter(pic => removePicture.id !== pic.id),
    },
  });
  const {
    me: { id, userName, myPicList, __typename },
  } = cache.readQuery({ query: ME_QUERY });
  cache.writeQuery({
    query: ME_QUERY,
    data: {
      me: {
        id,
        userName,
        myPicList: myPicList.filter(pic => removePicture.id !== pic.id),
        __typename,
      },
    },
  });
};

const RmPicMutn = ({ id }) => (
  <Mutation
    mutation={gql`
      mutation{
        removePicture(id: "${id}"){
          id
        }
      }
    `}
    update={updateFunc}
  >
    {(mutateFunc, { loading, error }) => {
      if (loading) return <span>Deleting...</span>;
      if (error) return <p className="text-danger">{error.message}</p>;
      return (
        <button type="button" className="btn btn-danger" onClick={mutateFunc}>
          Delete
        </button>
      );
    }}
  </Mutation>
);

RmPicMutn.propTypes = propTypes;

export default RmPicMutn;
