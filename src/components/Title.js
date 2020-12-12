import React from 'react'
import "../index.css"
import Text from "kds-react/build/cjs/components/Text/Text";

function Title() {
    return (
        <div className="headerTitle">
            <img className="h-48"
                 src="https://design.kroger.com/static/media/kroger-logo.daaca9f0.svg"
                 alt="The Kroger logo"></img>
            <Text className="block" size="m" bold>Welcome, Username | Sign Out</Text>
        </div>
    )
}
export default Title