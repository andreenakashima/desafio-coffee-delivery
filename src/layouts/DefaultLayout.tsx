import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
	return (
		<div className="h-screen w-full bg-background font-roboto">
			<Header />
			<Outlet />
		</div>
	);
}
