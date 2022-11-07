import { MapPin, ShoppingCart } from "phosphor-react";
import Logo from "../assets/logo.png";

export function Header() {
	return (
		<div className="m-auto px-4 md:w-3/4">
			<div className="flex items-center justify-between py-8">
				<img src={Logo} alt="" />
				<div className="flex gap-3">
					<div className="flex gap-1 rounded-md bg-coffee-purple-light p-2 text-coffee-purple-dark">
						<MapPin size={22} weight="fill" />
						Porto Alegre, RS
					</div>
					<button className="relative rounded-md bg-coffee-yellow-light p-2 text-coffee-yellow-dark">
						<ShoppingCart size={22} weight="fill" />
						<span className="absolute -top-3 -right-3 flex h-6 w-6 items-center justify-center rounded-full bg-coffee-yellow-dark text-white ">
							5
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
