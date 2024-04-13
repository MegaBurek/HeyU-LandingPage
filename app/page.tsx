"use client"
import {NextUIProvider, Spinner} from "@nextui-org/react";
import React, {Suspense, useEffect, useRef, useState} from "react";
import {StepOne} from "@/app/steps/step_one";
import {StepTwo} from "@/app/steps/step_two";
import {StepThree} from "@/app/steps/step_three";
import {StepFour} from "@/app/steps/step_four";
import {FormProvider} from "@/app/form_context";
import emailJs from "@emailjs/browser"

export default function Home() {
    const pageRef = useRef(false)
    const [stepper, setStepper] = useState<number>(1)

    useEffect(() => {
        if(!pageRef.current){
            emailJs.init({
                publicKey: "ZuZLtFScHl8Wy9NXn"
            })
            pageRef.current = true
        }
    }, [])

    return (
        <div className="flex flex-col min-h-screen">
            <FormProvider>
                <NextUIProvider>
                    <main
                        className="px-4 pt-4 md:px-8 md:pt-4"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                            minHeight: "100vh"
                        }}>
                        {stepper === 1 && (
                            <StepOne handleNext={() => setStepper(2)}/>
                        )}
                        {stepper === 2 && (
                            <Suspense fallback={<Spinner/>}>
                                <StepTwo handleNext={() => setStepper(3)}/>
                            </Suspense>
                        )}
                        {stepper === 3 && (
                            <StepThree handleNext={() => setStepper(4)}/>
                        )}
                        {stepper === 4 && (
                            <StepFour/>
                        )}
                    </main>
                </NextUIProvider>
            </FormProvider>
        </div>
    );
}
