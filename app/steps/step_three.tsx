import React, {FC, useRef, useState} from "react"
import {Button} from "@nextui-org/button";
import {Textarea} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/react";

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
    const [payOption, setPayOption] = useState<number>(0)

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
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 15
                }}
            >
                <div
                    className="container"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 5
                    }}
                >
                    <h1 className="text-large">
                        What do you think would make university life easier?
                    </h1>
                    <Textarea
                        variant="flat"
                        value={universityLifeQuestion}
                        onChange={(e) => setUniversityLifeQuestion(e.target.value)}
                    />
                </div>

                <div
                    className="container"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 5
                    }}
                >
                    <h1 className="text-large">
                        Based on the video, what can this platform can do for you?
                    </h1>
                    <Textarea
                        variant="flat"
                        value={platformVideoQuestion}
                        onChange={(e) => setPlatformVideoQuestion(e.target.value)}
                    />
                </div>
                <div
                    className="container"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 5
                    }}
                >
                    <h1 className="text-large">
                        How much would you pay for such a platform?
                    </h1>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
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
                </div>
            </div>
            <Button
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
    )
}
