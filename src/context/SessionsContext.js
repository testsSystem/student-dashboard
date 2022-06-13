import { createContext, useState } from "react";

export const SessionsContext = createContext({
    sessionID: null,
    testID: null,
    session: (prop) => {},
    test: (prop) => {}
})

export const SessionsProvider = (props) => {
    const [sessionID, setSessionID] = useState('s')
    const [testID, setTestID] = useState('s')

    const session = (prop) => {
        setSessionID(prop)
    }
    const test = (prop) => {
        setTestID(prop)
    }
    return <SessionsContext.Provider value={{
        sessionID,
        testID,
        session,
        test
    }}>
        {props.children}
    </SessionsContext.Provider>
}