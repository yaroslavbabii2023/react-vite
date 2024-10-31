import React, { createContext, useContext, useState } from 'react';

const TitleContext = createContext();

export const useTitle = () => useContext(TitleContext);

export const TitleProvider = ({ children }) => {
    const [title, setTitle] = useState('#хатаконы');

    return (
        <TitleContext.Provider value={{ title, setTitle }}>
            {children}
        </TitleContext.Provider>
    );
};