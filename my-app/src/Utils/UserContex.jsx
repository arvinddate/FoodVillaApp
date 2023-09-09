import React, { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Arvind Date",
        email: "arvinddate@gmail.com",
    },
});

export default UserContext;
