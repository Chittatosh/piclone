import React from 'react';
import { Query } from 'react-apollo';

import PictureCard from './PictureCard';
import { AUTH_TOKEN, ME_QUERY } from '../client/constants';
import { LoadingAlert, ErrorAlert, AuthAlert } from './Alerts';

const MyPicsQry = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const deleteBool = true;
  return authToken ? (
    <Query query={ME_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <LoadingAlert text="Fetching Your Pictures..." />;
        if (error) return <ErrorAlert text={error.message} />;
        if (!data.me.myPicList) {
          return <ErrorAlert text="You haven't saved any pictures yet!" />;
        }
        return (
          <div className="card-columns">
            {data.me.myPicList.map(
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
  ) : (
    <AuthAlert text="view your" />
  );
};

export default MyPicsQry;
