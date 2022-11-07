import { MapPin, ShoppingCart } from "phosphor-react";
import Logo from "../assets/Logo.png";

export function Header() {
	return (
		<div className="flex items-center justify-between py-8">
			<img src={Logo} alt="" />
			<div className="flex gap-3">
				<div className="flex gap-1 rounded-md bg-coffee-purple-light p-2 text-coffee-purple-dark">
					<MapPin size={22} weight="fill" />
					Porto Alegre, RS
				</div>
				<button className="relative rounded-md bg-coffee-yellow-light p-2 text-coffee-yellow-dark">
					<ShoppingCart size={22} weight="fill" />
					<span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-coffee-yellow-dark text-white ">
						5
					</span>
				</button>
			</div>
		</div>
	);
}
