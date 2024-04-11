import React, {FC} from "react"

export interface HeyULogoProps {

}

export const HeyULogo: FC<HeyULogoProps> = ({}) => {

    return (
        <div
            style={{
                opacity: 1,
                transform: "none",
                display: "block",
                lineHeight: 0,
                maxWidth: "100%",
                position: "relative"
            }}
        >
                    <span
                        style={{
                            marginTop: 10,
                            width: 140,
                            height: 140,
                            borderRadius: "100%",
                            borderColor: "#ffffff",
                            borderStyle: "solid",
                            borderWidth: 8,
                            boxShadow: "0rem 0.75rem 1.125rem 0rem rgba(0,0,0,0.122)",
                            transition: "transform 0.25s ease, z-index 0.25s ease",
                            display: "inline-block",
                            maxWidth: "100%",
                            overflow: "hidden",
                            verticalAlign: "top"
                        }}
                    >
                        <img
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                userSelect: "none",
                                borderRadius: "0 !important",
                                maxWidth: "100%",
                                verticalAlign: "top",
                                width: "inherit"
                            }}
                            src={"./heyuLogo.png"}
                            alt=""
                        />
                    </span>
        </div>
    );
}