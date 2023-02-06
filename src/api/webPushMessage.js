import axios from "axios";

const WEB_PUSH_URL = 'https://fcm.googleapis.com/fcm/send';
const KEY = 'key=AAAAgggD64o:APA91bHsscrzZne4hjPcShWZTvv_u-m-U5r4fxwY7JsOE-OT877YLi6bGYWdmyA2ZeY6L1VxbpY6CucpSuKiO4PZv_mLb4TNC30yCdclKmzW0HcawNtvTwCQxGDdBWax-Lv6ZF8R65ZK';

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
