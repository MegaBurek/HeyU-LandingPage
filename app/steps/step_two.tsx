import React, {FC, useMemo, useRef, useState} from "react"
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/react";
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import {useUniversities} from "../useUniversitites";
import {Spinner} from "@nextui-org/react";
import {HeyULogo} from "@/app/components/heyu_logo";
import {HeyUButton} from "@/app/components/heyu_button";

export interface StepTwoProps {
    handleNext: () => void
}

const MOCKED = [
    {id: 1, label: "Albertson College of Idaho"},
    {id: 1, label: "New Jersey City University"},
    {id: 1, label: "East Central University"}
]

export const StepTwo: FC<StepTwoProps> = ({handleNext}) => {
    const emailInputRef = useRef<string>(null)
    const universityRef = useRef<string>(null)

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [university, setUniversity] = useState<string>("")
    const {data, isFetching} = useUniversities()

    const mappedUniversities = useMemo(() => {
        if (data && data.universities && data.universities.length > 0) {
            return data.universities.map((university) => ({
                value: university.id.toString()!,
                label: university.name!
            }))
        }
    }, [data])!

    const fieldsAreEmpty = name.length === 0 || email.length === 0 || university.length === 0
    const hasUniversities = mappedUniversities && mappedUniversities.length > 0

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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Input
                        className="w-72"
                        variant="flat"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Select
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
                <HeyUButton handleNext={handleNext} title={"Next"}/>
            </div>
        </>
    )
}
