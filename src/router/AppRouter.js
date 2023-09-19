import { Navigate, Route, Routes } from "react-router-dom";
import HomeContainer from "../pages/Home/HomeContainer";
import FormDetailContainer from "../pages/Form/FormDetailContainer";

export const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<HomeContainer/>}/>
            <Route path="/form/:id" element={<FormDetailContainer/>}/>
            <Route path="/*" element={<Navigate to={<HomeContainer/>}/>}/>
        </Routes>
    )
}