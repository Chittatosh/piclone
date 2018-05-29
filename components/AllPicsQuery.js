import React from 'react';
import { Query } from 'react-apollo';

import PictureCard from './PictureCard';
import { AUTH_TOKEN, ALL_PIC_LIST } from '../client/constants';
import { AuthAlert, LoadingAlert, ErrorAlert } from './Alerts';

const AllPicsQuery = () => (
  <React.Fragment>
    {!localStorage.getItem(AUTH_TOKEN) && <AuthAlert text="add" />}
    <Query query={ALL_PIC_LIST}>
      {({ loading, error, data }) => {
        if (loading) return <LoadingAlert text="Fetching All Pictures..." />;
        if (error) return <ErrorAlert text={error.message} />;
        const deleteBool = false;
        return (
          <div className="card-columns">
            {data.fullPicList.map(
              ({ id, picUrl, picTitle, picUploader: { userName } }) => (
                <PictureCard
                  key={id}
                  {...{ id, picUrl, picTitle, userName, deleteBool }}
                />
              ),
            )}
          </div>
        );
      }}
    </Query>
  </React.Fragment>
);

export default AllPicsQuery;
