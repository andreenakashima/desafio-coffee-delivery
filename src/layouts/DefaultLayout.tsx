import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
	return (
		<div className="bg-background h-screen w-full">
			<Header />
			<Outlet />
		</div>
	);
}
