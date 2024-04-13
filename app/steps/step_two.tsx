import React, {FC, useMemo, useRef, useState} from "react"
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/react";
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import {useUniversities} from "../useUniversitites";
import {Spinner} from "@nextui-org/react";
import {HeyULogo} from "@/app/components/heyu_logo";
import {HeyUButton} from "@/app/components/heyu_button";
import {useFormContext} from "@/app/form_context";

export interface StepTwoProps {
    handleNext: () => void
}

const MOCKED = [
    {id: 1, label: "Albertson College of Idaho"},
    {id: 1, label: "New Jersey City University"},
    {id: 1, label: "East Central University"}
]

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const StepTwo: FC<StepTwoProps> = ({handleNext}) => {
    const emailInputRef = useRef<HTMLInputElement>(null)
    const universityRef = useRef<HTMLSelectElement>(null)

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
                    paddingTop: 100,
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
                    <Select
                        ref={universityRef}
                        className="w-72"
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                        label="Choose your university"
                    >
                        {MOCKED.map((university) => (
                            <SelectItem key={university.id} value={university.id}>
                                {university.label}
                            </SelectItem>
                        ))}
                    </Select>
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
