import React, {FC, useRef, useState} from "react"
import {Input} from "@nextui-org/react";
import {HeyULogo} from "@/app/components/heyu_logo";
import {HeyUButton} from "@/app/components/heyu_button";
import {useFormContext} from "@/app/form_context";

export interface StepTwoProps {
    handleNext: () => void
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const StepTwo: FC<StepTwoProps> = ({handleNext}) => {
    const emailInputRef = useRef<HTMLInputElement>(null)
    const universityRef = useRef<HTMLInputElement>(null)

    const [emailError, setEmailError] = useState<string | undefined>()

    const {
        from_name, setFromName,
        email, setEmail,
        university, setUniversity
    } = useFormContext()

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setEmail(value)

        if (!emailRegex.test(value)) {
            setEmailError('Please enter a valid email address')
        } else {
            setEmailError(undefined)
        }
    }

    const fieldsAreEmpty = from_name?.length === 0 || email?.length === 0 || university?.length === 0

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
                <div
                    className="container"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 15
                    }}
                >
                    <Input
                        className="w-72"
                        variant="flat"
                        label="Name"
                        value={from_name}
                        onChange={(e) => setFromName(e.target.value)}
                        onSubmit={() => emailInputRef?.current?.focus()}
                    />
                    <Input
                        ref={emailInputRef}
                        className="w-72"
                        variant="flat"
                        label="Email"
                        value={email}
                        onChange={(e) => handleChangeEmail(e)}
                        onSubmit={() => universityRef?.current?.focus()}
                    />
                    {emailError && <span id="email-error" style={{color: 'red'}}>{emailError}</span>}
                    <Input
                        ref={universityRef}
                        className="w-72"
                        variant="flat"
                        label="University"
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                        onSubmit={() => {
                            if (!fieldsAreEmpty) {
                                handleNext()
                            }
                        }}
                    />
                </div>
                <HeyUButton
                    disabled={fieldsAreEmpty}
                    handleNext={handleNext}
                    title={"Next"}
                />
            </div>
        </>
    )
}
