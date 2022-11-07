import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import ImgCoffee from "../assets/coffee.svg";

export function Hero() {
	return (
		<div className="w-full bg-hero-pattern bg-cover bg-no-repeat">
			<div className="m-auto grid gap-14 py-20 px-4 text-center md:w-3/4 lg:grid-cols-2 lg:text-left">
				<div className="w-full ">
					<h1 className="text-bold font-baloo2 text-2xl text-base-title lg:text-5xl">
						Encontre o café perfeito <br /> para qualquer hora do dia
					</h1>
					<p className="pt-4 text-xl text-base-subtitle">
						Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
						hora
					</p>

					<ul className="mt-16 grid justify-center gap-3 lg:grid-cols-2">
						<li className="flex items-center gap-3">
							<span className="rounded-full bg-coffee-yellow-dark p-2 text-white">
								<ShoppingCart size={16} weight="fill" />
							</span>{" "}
							Compra simples e segura
						</li>
						<li className="flex items-center gap-3">
							<span className="rounded-full bg-coffee-yellow p-2 text-white">
								<Timer size={16} weight="fill" />
							</span>{" "}
							Entrega rápida e rastreada
						</li>
						<li className="flex items-center gap-3">
							<span className="rounded-full bg-base-text p-2 text-white">
								<Package size={16} weight="fill" />
							</span>{" "}
							Embalagem mantém o café intacto
						</li>
						<li className="flex items-center gap-3">
							<span className="rounded-full bg-coffee-purple p-2 text-white">
								<Coffee size={16} weight="fill" />
							</span>{" "}
							O café chega fresquinho até você
						</li>
					</ul>
				</div>
				<div className="mt-20 flex w-full items-center justify-center lg:mt-0">
					<img className="w-auto" src={ImgCoffee} alt="" />
				</div>
			</div>
		</div>
	);
}
