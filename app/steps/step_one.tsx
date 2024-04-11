import React, {FC} from "react"
import {Image} from "@nextui-org/react";
import {HeyULogo} from "@/app/components/heyu_logo";
import {HeyUButton} from "@/app/components/heyu_button";

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
                <Image
                    alt="Intro video"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
                <HeyUButton handleNext={handleNext} title={"Join waitlist"}/>
            </div>
        </>
    )
}
