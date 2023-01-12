import React from "react";
import { Typography, useTheme, Link } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";

const AdvertWidget = () => {
    const { palette } = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    return (
        <WidgetWrapper>
        <Link href="https://dhyey-lyrykss.netlify.app/" underline="none" target="_blank" rel="noopener">
            <FlexBetween>
                <Typography color={dark} variant="h5" fontWeight="500">
                    Sponsored
                </Typography>
                <Typography color={medium}>Create Ad</Typography>
            </FlexBetween>
            <img
                width="100%"
                height="auto"
                alt="advert"
                src="https://sociogram-server.onrender.com/assets/lyrykks.jpg"
                style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
            />
            <FlexBetween>
                <Typography color={main}>Lyrykks</Typography>
                
                <Typography
                    sx={{ "&:hover": { cursor: "pointer"} }} color={medium}>https://dhyey-lyrykss.netlify.app</Typography>
            </FlexBetween>
            <Typography color={medium} m="0.5rem 0">
                The perfect music streaming platform you need.
            </Typography>
            </Link>
        </WidgetWrapper>
    );
};

export default AdvertWidget;
