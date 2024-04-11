"use client"
import {NextUIProvider, Spinner} from "@nextui-org/react";
import React, {Suspense, useState} from "react";
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
            </QueryClientProvider>
        </div>
    );
}
