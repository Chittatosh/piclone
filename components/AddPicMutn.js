import React from 'react';
import { Mutation } from 'react-apollo';

import AddPicForm from './AddPicForm';
import { ALL_PIC_LIST, ME_QUERY, ADD_PIC } from '../client/constants';

const updateFunc = (cache, { data: { addPicture } }) => {
  const { fullPicList } = cache.readQuery({ query: ALL_PIC_LIST });
  cache.writeQuery({
    query: ALL_PIC_LIST,
    data: { fullPicList: fullPicList.concat([addPicture]) },
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
        myPicList: myPicList.concat([addPicture]),
        __typename,
      },
    },
  });
};

const AddPicMutn = () => (
  <Mutation mutation={ADD_PIC} update={updateFunc}>
    {(mutateFunc, { loading, error, data }) => {
      const errorMessage = (error && error.message) || '';
      const { picUrl } = (data && data.addPicture) || { picUrl: '' };
      return <AddPicForm {...{ mutateFunc, loading, errorMessage, picUrl }} />;
    }}
  </Mutation>
);

export default AddPicMutn;
