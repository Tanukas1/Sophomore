import { createContext, useState } from "react";

export const NovelContext = createContext();

export const NovelProvider = props => {

    const [NovelList, setNovelList] = useState([]);
    const [loading, setLoading] = useState(true);

    return <NovelContext.Provider value={[NovelList, setNovelList, loading, setLoading]}>
        {props.children}
    </NovelContext.Provider>

}