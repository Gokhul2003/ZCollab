'use client';
import { useEffect,useState } from "react";
import {
    DeviceSettings,
    VideoPreview,
    useCall,
    useCallStateHooks,
  } from '@stream-io/video-react-sdk';
import Alert from "./Alert";  
import { Button } from "./ui/button";
const MeetingSetup=({
    setIsSetupComplete,

}:{
    setIsSetupComplete:(value:boolean) => void
})=>{

})