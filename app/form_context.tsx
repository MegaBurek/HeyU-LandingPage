"use client"
import React, {createContext, FC, PropsWithChildren, useContext, useState} from "react"

interface FormContextProps {
    from_name?: string,
    email?: string,
    university?: string,
    answer_1?: string,
    answer_2?: string,
    answer_3?: string,
    setFromName: React.Dispatch<React.SetStateAction<string | undefined>>,
    setEmail: React.Dispatch<React.SetStateAction<string | undefined>>,
    setUniversity: React.Dispatch<React.SetStateAction<string | undefined>>,
    setAnswer1: React.Dispatch<React.SetStateAction<string | undefined>>,
    setAnswer2: React.Dispatch<React.SetStateAction<string | undefined>>,
    setAnswer3: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const useFormContext = () => {
    return useContext(FormContext)
}

const FormContext = createContext({} as FormContextProps)

export const FormProvider: FC<PropsWithChildren> = ({children}) => {
    const [fromName, setFromName] = useState<string | undefined>()
    const [email, setEmail] = useState<string | undefined>()
    const [university, setUniversity] = useState<string | undefined>()
    const [answer1, setAnswer1] = useState<string | undefined>()
    const [answer2, setAnswer2] = useState<string | undefined>()
    const [answer3, setAnswer3] = useState<string | undefined>()

    return (
        <FormContext.Provider
            value={{
                from_name: fromName,
                email: email,
                university: university,
                answer_1: answer1,
                answer_2: answer2,
                answer_3: answer3,
                setFromName,
                setEmail,
                setUniversity,
                setAnswer1,
                setAnswer2,
                setAnswer3
            }}
        >
            {children}
        </FormContext.Provider>
    )
}