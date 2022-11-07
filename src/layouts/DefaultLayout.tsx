import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
	return (
		<div className="h-full w-full bg-background pb-20 font-roboto">
			<Header />
			<Outlet />
		</div>
	);
}
