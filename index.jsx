import React from "react";
import { useParams } from "react-router-dom";

import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
const RoomPage = ( ) => {

    const { roomId } = useParams();
    
    const myMeeting = async (Element) => {
        const appID = 836650923;
        const serverSecret = "475719b151b4a4a319b2eaa9242525f5";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID, 
                serverSecret, 
                roomId,
                Date.now().toString(),
                "Sanjeev Adhikari"
            );
            const zc = ZegoUIKitPrebuilt.create(kitToken);
            zc.joinRoom({
                container: Element,
                sharedLinks: [
                    {
                        name: 'Copy Link',
                        url: `http://localhost:3000/room/${roomId}`
                    }
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.GroupCall,
                },
                showScreenSharingButton: true,

            });
    }

    return (

       <div>
        <div ref={myMeeting} />
       </div>
    )
};

export default RoomPage;