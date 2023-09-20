import { Route, Routes } from "react-router-dom";
import HomeContainer from "../pages/Home/HomeContainer";
import FormDetail from "../pages/FormDetail/FormDetail";

export const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<HomeContainer/>}/>
            <Route path="/form/:id" element={<FormDetail/>}/>
            <Route path="/*" element={<HomeContainer/>}/>
        </Routes>
    )
}