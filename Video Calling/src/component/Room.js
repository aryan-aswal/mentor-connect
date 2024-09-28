import React from 'react'
import { useParams } from 'react-router-dom'
import { AppID, serversecret } from './Constants';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';


const Room = () => {
  const {roomid}=useParams();
  const roomID = roomid;
  let myMeeting = async (element) => {
 // generate Kit Token
  const appID = AppID;
  const serverSecret = serversecret;
  const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  "nullpointers");


 // Create instance object from Kit Token.
  const zp = ZegoUIKitPrebuilt.create(kitToken);
  // start the call
  zp.joinRoom({
    container: element,
    sharedLinks: [
      {
        name: 'copy link',
        url:
         window.location.protocol + '//' + 
         window.location.host + window.location.pathname +
          '?roomID=' +
          roomID,
      },
    ],
    scenario: {
      mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
    },
  });

  }
  return (
    <div ref={myMeeting}>
     
    </div>
  )
}


export default Room
