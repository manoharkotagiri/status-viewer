import React from 'react'
import "../index.css"
import Text from "kds-react/build/cjs/components/Text/Text";

function Title() {
    return (
        <div className="headerTitle">
            <img className="h-48"
                 src=""
                 alt="The logo"></img>
            <Text className="block" size="m" bold>Welcome, Username | Sign Out</Text>
        </div>
    )
}
export default Title