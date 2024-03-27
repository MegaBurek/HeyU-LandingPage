import React, {FC} from "react"

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
            <h1>Thank you for joining our waitlist, we can&apos;t wait for your input!</h1>
        </div>
    );
}