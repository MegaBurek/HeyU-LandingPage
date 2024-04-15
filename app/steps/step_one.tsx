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
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 5
                }}>
                    <h1 style={{
                        color: "white",
                        marginBottom: 10,
                        textAlign: "center",
                        lineHeight: "1.2"
                    }}>
                        Hey you! <br/>
                        We're building something new. <br/>
                        Sign up for early beta access!
                    </h1>
                    <LandingPageVideo/>
                </div>

                <HeyUButton handleNext={handleNext} title={"Join waitlist"}/>
            </div>
        </>
    )
}
