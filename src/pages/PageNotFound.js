import React, { useEffect } from "react";
import json from "../Config";


function PageNotFound() {
    useEffect(() => {
            const timeout = setTimeout(() => {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            if (/android/i.test(userAgent)) {
                window.location.replace(json.playstore);
            }
            if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
                window.location.replace(json.appstore);
            }
            }, 3000);
            return () => clearTimeout(timeout);
    }, []);
    return <>Will redirect in 3 seconds...</>;
  }



export default PageNotFound;