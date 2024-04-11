import React, {FC} from "react"
import {Button} from "@nextui-org/button";

export interface ButtonProps {
    disabled?: boolean,
    handleNext: () => void,
    title: string
}

export const HeyUButton: FC<ButtonProps> = ({handleNext, disabled, title}) => {

    return (
        <Button
            disabled={disabled}
            size="lg"
            onClick={handleNext}
            style={{
                color: "#ffffff",
                backgroundColor: "rgba(38,37,31,0.722)",
                boxShadow: "0rem 0.875rem 2.125rem 0rem rgba(0,0,0,0.329)",
                fontSize: 18
            }}
        >
            {title}
        </Button>
    );
}