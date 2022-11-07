import { Card } from "../components/Card";
import { Hero } from "../components/Hero";

export function Home() {
	return (
		<>
			<Hero />
			<div className="m-auto mt-8 p-2 md:w-3/4">
				<h2 className="font-baloo2 text-2xl text-base-title">Nossos cafés</h2>

				<ul className="mt-14 grid content-center justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					<Card />
				</ul>
			</div>
		</>
	);
}
