import React, {FC} from "react"
import {Button} from "@nextui-org/button";
import {Image} from "@nextui-org/react";

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
                <Image
                    width={1000}
                    alt="Intro video"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
                <Button
                    size="lg"
                    onClick={handleNext}
                    style={{
                        backgroundColor: "#FECE2F",
                        fontSize: 18
                    }}
                >
                    Join Waitlist
                </Button>
            </div>
        </>
    )
}
