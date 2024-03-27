import React, {FC, useMemo, useRef, useState} from "react"
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/react";
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import {useUniversities} from "../useUniversitites";
import {Spinner} from "@nextui-org/react";

export interface StepTwoProps {
    handleNext: () => void
}

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
                    {hasUniversities ? (
                        <Select
                            className="w-72"
                            value={university}
                            onChange={(e) => setUniversity(e.target.value)}
                            label="Choose your university"
                        >
                            {mappedUniversities.map((university) => (
                                <SelectItem key={university.value} value={university.value}>
                                    {university.label}
                                </SelectItem>
                            ))}
                        </Select>
                    ) : (
                        <h1>There are no universities to display</h1>
                    )}
                </div>
                <Button
                    disabled={fieldsAreEmpty}
                    size="lg"
                    onClick={handleNext}
                    style={{
                        backgroundColor: "#FECE2F",
                        fontSize: 18
                    }}
                >
                    Next
                </Button>
            </div>
        </>
    )
}
