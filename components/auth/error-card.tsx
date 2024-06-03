import { Header } from "@/components/auth/header"
import { BackButton } from "@/components/auth/back-button"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { CardWrapper } from "./card-wrapper"



export const ErrorCard = () => {
    return (
        <CardWrapper
            headerLabel="Oops! Something went wrong!"
            backButtonHref="/auth/login"
            backButtonLabel="Back to login"
        >
            <div className=" w-full flex justify-center items-center">
                <ExclamationTriangleIcon className=" text-destructive" />
            </div>

        </CardWrapper>
    )
}                                  