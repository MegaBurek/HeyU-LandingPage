import React, {FC, useRef, useState} from "react"
import {Button} from "@nextui-org/button";
import {Input, Textarea} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/react";
import {HeyULogo} from "@/app/components/heyu_logo";
import {HeyUButton} from "@/app/components/heyu_button";

export interface StepThreeProps {
    handleNext: () => void
}

const payOptions = [
    {id: 1, label: "2$ a month"},
    {id: 2, label: "20$ a year"},
    {id: 3, label: "50$ 4 years"},
    {id: 4, label: "100$ lifetime"}
]

export const StepThree: FC<StepThreeProps> = ({handleNext}) => {
    const universityLifeQuestionRef = useRef<string>(null)
    const platformVideoQuestionRef = useRef<string>(null)

    const [universityLifeQuestion, setUniversityLifeQuestion] = useState<string>("")
    const [platformVideoQuestion, setPlatformVideoQuestion] = useState<string>("")
    const [ownPricing, setOwnPricing] = useState<string>("")
    const [payOption, setPayOption] = useState<number>(0)
    const [stepper, setStepper] = useState<number>(1)

    return (
        <div
            className="container"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 15
                }}
            >
                <HeyULogo/>

                {stepper === 1 && (
                    <>
                        <div
                            className="container"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: 5,
                                marginBottom: 100
                            }}
                        >
                            <h1 style={{
                                color: "white",
                                fontSize: 35,
                                marginBottom: 10,
                                lineHeight: "1.05",
                                textAlign: "left"
                            }} className="text-large">
                                What do you think would make university life easier?
                            </h1>
                            <Textarea
                                height={150}
                                variant="flat"
                                value={universityLifeQuestion}
                                onChange={(e) => setUniversityLifeQuestion(e.target.value)}
                            />
                        </div>
                        <HeyUButton handleNext={() => setStepper(2)} title={"Next"}/>
                    </>
                )}

                {stepper === 2 && (
                    <>
                        <div
                            className="container"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: 5,
                                marginBottom: 100
                            }}
                        >
                            <h1 style={{
                                color: "white",
                                fontSize: 35,
                                marginBottom: 10,
                                lineHeight: "1.05",
                                textAlign: "left"
                            }} className="text-large">
                                Based on the video, what can this platform can do for you?
                            </h1>
                            <Textarea
                                style={{
                                    height: 150
                                }}
                                variant="flat"
                                value={platformVideoQuestion}
                                onChange={(e) => setPlatformVideoQuestion(e.target.value)}
                            />
                        </div>
                        <HeyUButton handleNext={() => setStepper(3)} title={"Next"}/>
                    </>
                )}

                {stepper === 3 && (
                    <>
                        <div
                            className="container"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: 5,
                                marginBottom: 100
                            }}
                        >
                            <h1 style={{
                                color: "white",
                                fontSize: 35,
                                marginBottom: 10,
                                lineHeight: "1.05",
                                textAlign: "left"
                            }} className="text-large">
                                How much would you pay for such a platform?
                            </h1>
                            <div
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-evenly",
                                    alignItems: "center",
                                    gap: 10
                                }}
                            >
                                {payOptions.map((x, index) => (
                                    <Card
                                        className="
                                shadow
                                hover:bg-amber-100
                                cursor-pointer
                                "
                                        onClick={() => setPayOption(x.id)}
                                        key={`payOption-${index}`}
                                    >
                                        <CardBody>
                                            <p>{x.label}</p>
                                        </CardBody>
                                    </Card>
                                ))}
                            </div>


                            <h1 style={{
                                marginTop: 20,
                                color: "white",
                                fontSize: 35,
                                marginBottom: 10,
                                textAlign: "left"
                            }} className="text-large">
                                Or suggest your own pricing ...
                            </h1>
                            <Input
                                className="w-72"
                                variant="flat"
                                label="Email"
                                value={ownPricing}
                                onChange={(e) => setOwnPricing(e.target.value)}
                            />
                        </div>
                        <HeyUButton handleNext={handleNext} title={"Next"}/>
                    </>
                )}
            </div>
        </div>
    )
}
