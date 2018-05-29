import { gql } from 'apollo-boost';

const AUTH_TOKEN = 'auth-token';

const PICTURE = `
  {
    id
    picUrl
    picTitle
    picUploader{
      userName
    }
  }
`;

const ALL_PIC_LIST = gql`
  { 
    fullPicList ${PICTURE} 
  }
`;

const USER = `
  {
    id
    userName
    myPicList ${PICTURE}
  }
`;

const ME_QUERY = gql`
  { 
    me ${USER} 
  }
`;

const ADD_PIC = gql`
  mutation addPicture($picUrl: String!, $picTitle: String!) {
    addPicture(picUrl: $picUrl, picTitle: $picTitle) ${PICTURE}
  }
`;

export { AUTH_TOKEN, PICTURE, ALL_PIC_LIST, USER, ME_QUERY, ADD_PIC };
