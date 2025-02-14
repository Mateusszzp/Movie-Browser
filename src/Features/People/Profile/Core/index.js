import { useSelector } from "react-redux"
import { selcetStatus } from "../profileSlice"
import Loading from "../../../../common/Search/Loading";
import ErrorPage from "../../../../common/Search/ErrorPage";
import Success from "./Success";

const Core = () => {
    const status = useSelector(selcetStatus);
  
    switch (status) {
        case "pending":
            return <Loading />
        case "success":
            return <Success />
        default: 
            return <ErrorPage />

    }
};
export default Core;