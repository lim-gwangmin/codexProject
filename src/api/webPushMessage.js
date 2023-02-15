import axios from "axios";

const WEB_PUSH_URL = 'https://fcm.googleapis.com/fcm/send';
const KEY = process.env.REACT_APP_FIREBASE_KEY;

export const webPush = async (title, comment, token) => {
   return await axios.post(
      WEB_PUSH_URL, 
      {
         notification:{
            "title": title,
            "body": comment,
         },
         to: token
      },
      {
         headers: {
            "Authorization": KEY,
            "Content-Type": "application/json",
         }
      })
};
