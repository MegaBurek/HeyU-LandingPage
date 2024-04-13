import React, {FC} from "react"
import {HeyULogo} from "@/app/components/heyu_logo";
import {HeyUButton} from "@/app/components/heyu_button";
import {LandingPageVideo} from "@/app/components/landing_page_video";

export interface StepOneProps {
    handleNext: () => void
}

export const StepOne: FC<StepOneProps> = ({handleNext}) => {

    return (
        <>
            <div
                className="container"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 20
                }}
            >
                <HeyULogo/>
                <LandingPageVideo/>
                <HeyUButton handleNext={handleNext} title={"Join waitlist"}/>
            </div>
        </>
    )
}
