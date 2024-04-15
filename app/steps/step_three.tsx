import React, {FC, useState} from "react"
import {Card, CardBody, Input, Textarea} from "@nextui-org/react";
import {HeyULogo} from "@/app/components/heyu_logo";
import {HeyUButton} from "@/app/components/heyu_button";
import {useFormContext} from "@/app/form_context";
import emailJs from "@emailjs/browser";
import {Spinner} from "@nextui-org/react";

export interface StepThreeProps {
    handleNext: () => void
}

const payOptions = [
    {id: 1, label: "10$ a month"},
    {id: 2, label: "$30 a month"},
    {id: 3, label: "$50 a month"},
    {id: 4, label: "$50+ a month"}
]

export const StepThree: FC<StepThreeProps> = ({handleNext}) => {
    const {
        from_name, email, university,
        answer_1, setAnswer1,
        answer_2, setAnswer2,
        answer_3, setAnswer3
    } = useFormContext()

    const [payOption, setPayOption] = useState<number | undefined>(undefined)
    const [stepper, setStepper] = useState<number>(1)
    const [emailLoading, setEmailLoading] = useState<boolean>(false)

    const handleSendEmail = async () => {
        const answer3 = answer_3?.length! > 0 ? answer_3 : payOptions.find((x) => x.id === payOption)?.label
        setEmailLoading(true)
        await emailJs.send("service_da6x13d", "template_zjkimb9", {
            from_name: from_name,
            email: email,
            university: university,
            answer_1: answer_1,
            answer_2: answer_2,
            answer_3: answer3
        })
        setEmailLoading(false)
        handleNext()
    }

    const fieldsAreEmpty = answer_1?.length === 0 || answer_2?.length === 0 || (answer_3?.length === 0 && !payOption)

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
                            className="container step-container"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: 5
                            }}
                        >
                            <h1 style={{
                                marginBottom: 10,
                                lineHeight: "1.05",
                                textAlign: "center"
                            }}>
                                What do you think would improve your university experience?
                            </h1>
                            <Textarea
                                style={{
                                    height: 150
                                }}
                                variant="flat"
                                value={answer_1}
                                onChange={(e) => setAnswer1(e.target.value)}
                            />
                        </div>
                        <HeyUButton
                            disabled={answer_1?.length === 0}
                            handleNext={() => setStepper(2)}
                            title={"Next"}
                        />
                    </>
                )}

                {stepper === 2 && (
                    <>
                        <div
                            className="container step-container"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: 5
                            }}
                        >
                            <h1 style={{
                                marginBottom: 10,
                                lineHeight: "1.05",
                                textAlign: "left"
                            }}>
                                Based on the video, what features would you like in this platform?
                            </h1>
                            <Textarea
                                style={{
                                    height: 150
                                }}
                                variant="flat"
                                value={answer_2}
                                onChange={(e) => setAnswer2(e.target.value)}
                            />
                        </div>
                        <HeyUButton
                            disabled={answer_2?.length === 0}
                            handleNext={() => setStepper(3)}
                            title={"Next"}
                        />
                    </>
                )}

                {stepper === 3 && (
                    <>
                        <div
                            className="container step-container"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                gap: 5
                            }}
                        >
                            <h1 style={{
                                marginBottom: 10,
                                lineHeight: "1.05",
                                textAlign: "left"
                            }}>
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
                                        className={`
                                            shadow
                                            hover:bg-amber-100
                                            cursor-pointer
                                            ${payOption === x.id ? "bg-amber-200" : "bg-white"}
                                            `}
                                        key={`payOption-${index}`}
                                    >
                                        <CardBody onClick={() => setPayOption(x.id)}>
                                            <p>{x.label}</p>
                                        </CardBody>
                                    </Card>
                                ))}
                            </div>


                            <h1 style={{
                                marginTop: 20,
                                marginBottom: 10
                            }}>
                                Or suggest your own pricing
                            </h1>
                            <Input
                                className="w-72"
                                variant="flat"
                                value={answer_3}
                                onChange={(e) => setAnswer3(e.target.value)}
                            />
                        </div>
                        {emailLoading ? (
                            <Spinner color="warning"/>
                        ) : (
                            <HeyUButton
                                disabled={fieldsAreEmpty}
                                handleNext={() => handleSendEmail()}
                                title={"Next"}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
