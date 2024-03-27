import React, {FC, useMemo, useRef, useState} from "react"
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/react";
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import { useUniversities } from "../useUniversitites";
import {Spinner} from "@nextui-org/react";

export interface StepTwoProps {
    handleNext: () => void
}

const animals = [
    {label: "Cat", value: "cat", description: "The second most popular pet in the world"},
    {label: "Dog", value: "dog", description: "The most popular pet in the world"},
    {label: "Elephant", value: "elephant", description: "The largest land animal"},
    {label: "Lion", value: "lion", description: "The king of the jungle"},
    {label: "Tiger", value: "tiger", description: "The largest cat species"},
    {label: "Giraffe", value: "giraffe", description: "The tallest land animal"},
    {
        label: "Dolphin",
        value: "dolphin",
        description: "A widely distributed and diverse group of aquatic mammals",
    },
    {label: "Penguin", value: "penguin", description: "A group of aquatic flightless birds"},
    {label: "Zebra", value: "zebra", description: "A several species of African equids"},
    {
        label: "Shark",
        value: "shark",
        description: "A group of elasmobranch fish characterized by a cartilaginous skeleton",
    },
    {
        label: "Whale",
        value: "whale",
        description: "Diverse group of fully aquatic placental marine mammals",
    },
    {label: "Otter", value: "otter", description: "A carnivorous mammal in the subfamily Lutrinae"},
    {label: "Crocodile", value: "crocodile", description: "A large semiaquatic reptile"},
]

export const StepTwo: FC<StepTwoProps> = ({handleNext}) => {
    const emailInputRef = useRef<string>(null)
    const universityRef = useRef<string>(null)

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [university, setUniversity] = useState<string>("")
    const { data, isFetching } = useUniversities()

    const mappedUniversities = useMemo(() => {
      if (data && data.universities && data.universities.length > 0) {
        return data.universities.map((university) => ({
          value: university.id.toString()!,
          label: university.name!
        }))
      }
    }, [data])!

    const fieldsAreEmpty = name.length === 0 || email.length === 0 || university.length === 0

    return (
        <>
            {isFetching ? (
                <Spinner />
            ) : (
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
            )}
        </>
    )
}
