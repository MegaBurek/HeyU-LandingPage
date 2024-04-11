import React, {FC} from "react"
import {HeyULogo} from "@/app/components/heyu_logo";

export interface StepFourProps {

}

export const StepFour: FC<StepFourProps> = ({}) => {

    return (
        <div
            className="container"
            style={{
                paddingTop: 100,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20
            }}
        >
            <HeyULogo/>
            <h1 style={{
                color: "white",
                fontSize: 26
            }}>Thank you for joining our waitlist, we can&apos;t wait for your input!</h1>
        </div>
    );
}