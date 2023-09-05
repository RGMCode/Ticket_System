import {Navigate, Outlet} from "react-router-dom";

type Props = {
    user: string
}

export default function ProtectedRoute(props:Props) {

    const authenticated:boolean = props.user !== undefined && props.user !== "anonymousUser" && props.user !== ""

    return(
        authenticated ? <Outlet/> : <Navigate to={"/"}/>
    );

}