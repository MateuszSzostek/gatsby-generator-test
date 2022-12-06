import React from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import { useSearchContext } from "../../context/SearchContext/SearchContext";

const useNavigation = () => {
    const { pathname } = useLocation();

    const {
        setQuery,
        searchContext: { query },
    } = useSearchContext();

    const handleKeyDown = (e) => {
        if (pathname !== "/") {
            if (e.key === "Enter") {
                navigate("/");
            }
        }
    };

    return { handleKeyDown };
};

export default useNavigation;
