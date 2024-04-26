import React from "react"
import { Route, Routes } from "react-router-dom"
import { HomePage, LoginPage, CharacterPage } from "./pages/login"
import { RouterLayout } from "./common/RouterLayout"


export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path='/' element={<RouterLayout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/Character/:id' element={<CharacterPage />} />
            </Route>
            <Route path='/Login' element={<LoginPage />} />
        </Routes>
    )
}