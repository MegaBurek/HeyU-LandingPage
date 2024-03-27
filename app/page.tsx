"use client"
import {NextUIProvider} from "@nextui-org/react";
import React, {useState} from "react";
import {StepOne} from "@/app/steps/step_one";
import {StepTwo} from "@/app/steps/step_two";
import {StepThree} from "@/app/steps/step_three";
import {StepFour} from "@/app/steps/step_four";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
    const [stepper, setStepper] = useState<number>(1)
    return (
        <div className="flex flex-col min-h-screen">
            <QueryClientProvider client={queryClient}>
                <NextUIProvider>
                    <header style={{
                        position: "fixed",
                        top: 0,
                        width: "100%",
                        height: 80,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1,
                        background: "#ffffff"
                    }}>
                        <img src={"/logo_min.png"} style={{height: 54, width: "auto"}}/>
                    </header>
                    <main
                        className="px-4 pt-24 md:px-8 md:pt-24"
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
                            <StepTwo handleNext={() => setStepper(3)}/>
                        )}
                        {stepper === 3 && (
                            <StepThree handleNext={() => setStepper(4)}/>
                        )}
                        {stepper === 4 && (
                            <StepFour/>
                        )}
                    </main>
                </NextUIProvider>
            </QueryClientProvider>
        </div>
    );
}
