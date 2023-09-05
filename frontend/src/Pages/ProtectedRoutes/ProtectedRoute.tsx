
import { useUser } from '../../UserContext';
import {Outlet} from "react-router-dom";

export default function ProtectedRoute() {
    const { user } = useUser();

    if (!user) {
        return 'Sie sind nicht angemeldet.';
    }

    return <Outlet />;
}