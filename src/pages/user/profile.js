import Head from 'next/head';

import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';

const Profile = () => {
  let [userInfo, setUserInfo] = useState({ id: '', username: '', attributes: '' });
  useEffect(
    () => {
      Auth.currentAuthenticatedUser()
        .then(res => {
          setUserInfo(res);
          console.log("Authenticated user", res);
        })
        .catch(err => console.log(err));
    }, []);

  const saveProfile = () => {
    Auth.updateUserAttributes(userInfo, {
      preferred_username: document.getElementById('fieldUsername').value
    }).then(res => console.log(res))
  }

  return <div>
    <Head>
      <title>
        User
      </title>
    </Head>
    HELLO YOU ON USER PROFILE NOW
    <div>
      <p>
        User: {userInfo.attributes.preferred_username}
        <input type='text' id="fieldUsername" />
      </p>
      <p>
        id: {userInfo.id}
      </p>
      <p>
        attributes: {JSON.stringify(userInfo.attributes)}
      </p>
    </div>
    <button onClick={() => saveProfile()}>Save</button>
  </div>
};

export default Profile;