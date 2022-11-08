import {
	Bank,
	CreditCard,
	CurrencyDollar,
	MapPinLine,
	Minus,
	Money,
	Plus,
	Trash,
} from "phosphor-react";

export function Checkout() {
	return (
		<div className="m-auto grid w-3/4 grid-cols-5 gap-8">
			<form action="">
				<div className="col-span-3 ">
					<h2 className="font-baloo2 text-lg text-base-subtitle">
						Complete o seu pedido
					</h2>

					<div className="mt-4 rounded bg-base-card p-10">
						<div className="flex gap-2">
							<MapPinLine size={22} className="text-coffee-yellow" />
							<div>
								<h3>Endereço de entrega</h3>
								<p className="text-sm text-base-text">
									Informe o endereço onde deseja receber o seu pedido
								</p>
							</div>
						</div>

						<div className="mt-8">
							<input
								type="text"
								className="w-2/6 rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none"
								placeholder="CEP"
							/>
							<div className="mt-3 w-full">
								<input
									type="text"
									className="w-full rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none"
									placeholder="Rua"
								/>
							</div>
							<div className="mt-3 flex gap-3">
								<input
									type="text"
									className="w-2/6 rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none"
									placeholder="Número"
								/>
								<input
									type="text"
									className="w-4/6 rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none"
									placeholder="Complemento"
								/>
							</div>
							<div className="mt-3 flex gap-3">
								<input
									type="text"
									className="w-2/6 rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none"
									placeholder="Bairro"
								/>
								<div className="mt-3 flex w-4/6 gap-3">
									<input
										type="text"
										className="w-5/6 rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none"
										placeholder="Cidade"
									/>
									<input
										type="text"
										className="w-1/6 rounded border border-base-button bg-base-input p-3 text-base-text focus:border-coffee-yellow-dark focus:outline-none"
										placeholder="UF"
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-3 rounded bg-base-card p-10">
						<div className="flex gap-2">
							<CurrencyDollar size={22} className="text-coffee-purple" />
							<div>
								<h3>Pagamento</h3>
								<p className="text-sm text-base-text">
									O pagamento é feito na entrega. Escolha a forma que deseja
									pagar.
								</p>
							</div>
						</div>

						<div className="mt-8 flex gap-3">
							<div className="flex">
								<input
									type="radio"
									name="payments"
									id="credit-card"
									className="appearance-none"
								/>
								<label
									htmlFor="credit-card"
									className="flex cursor-pointer items-center justify-center gap-3 rounded-md bg-base-button p-4 uppercase text-base-text"
								>
									<CreditCard size={16} className="text-coffee-purple" />
									Cartão de Crédito
								</label>
							</div>

							<div className="flex">
								<input
									type="radio"
									name="payments"
									id="debit-card"
									className="appearance-none"
								/>
								<label
									htmlFor="debit-card"
									className="flex cursor-pointer items-center justify-center gap-3 rounded-md bg-base-button p-4 uppercase text-base-text"
								>
									<Bank size={16} className="text-coffee-purple" />
									Cartão de Débito
								</label>
							</div>

							<div className="flex">
								<input
									type="radio"
									name="payments"
									id="money"
									className="appearance-none"
								/>
								<label
									htmlFor="money"
									className="flex cursor-pointer items-center justify-center gap-3 rounded-md bg-base-button p-4 uppercase text-base-text"
								>
									<Money size={16} className="text-coffee-purple" />
									Dinheiro
								</label>
							</div>
						</div>
					</div>
				</div>

				<div className="col-span-2 ">
					<h2 className="font-baloo2 text-lg text-base-subtitle">
						Cafés Selecionados
					</h2>

					<div className="mt-3 rounded-md rounded-tr-[36px] rounded-bl-[36px] bg-base-card p-10">
						<ul>
							<li className="mb-6 flex w-full justify-between border-b border-base-button pb-6">
								<div className="flex gap-5">
									<img
										className="h-16 w-16"
										src="./products-img/expresso.png"
										alt=""
									/>

									<div className="w-auto">
										<p>Expresso Tradicional</p>

										<div className="mt-2 flex gap-3">
											<div className="rounded-md bg-base-button">
												<button className="px-2 py-3 text-coffee-purple">
													<Minus size={14} weight="bold" />
												</button>

												<span className="p-2">1</span>

												<button className="px-2 py-3 text-coffee-purple">
													<Plus size={14} weight="bold" />
												</button>
											</div>
											<button className="flex items-center justify-center gap-1 rounded-md bg-base-button px-2 uppercase text-base-text">
												<Trash size={18} className="text-coffee-purple" />{" "}
												Remover
											</button>
										</div>
									</div>
								</div>

								<div className="text-base font-bold text-base-text">
									R$ 9,90
								</div>
							</li>
							<li className="mb-6 flex w-full justify-between border-b border-base-button pb-6">
								<div className="flex gap-5">
									<img
										className="h-16 w-16"
										src="./products-img/expresso.png"
										alt=""
									/>

									<div className="w-auto">
										<p>Expresso Tradicional</p>

										<div className="mt-2 flex gap-3">
											<div className="rounded-md bg-base-button">
												<button className="px-2 py-3 text-coffee-purple">
													<Minus size={14} weight="bold" />
												</button>

												<span className="p-2">1</span>

												<button className="px-2 py-3 text-coffee-purple">
													<Plus size={14} weight="bold" />
												</button>
											</div>
											<button className="flex items-center justify-center gap-1 rounded-md bg-base-button px-2 uppercase text-base-text">
												<Trash size={18} className="text-coffee-purple" />{" "}
												Remover
											</button>
										</div>
									</div>
								</div>

								<div className="text-base font-bold text-base-text">
									R$ 9,90
								</div>
							</li>
						</ul>

						<div>
							<p className="flex items-center justify-between text-base-text">
								<span>Total de itens</span> <span>R$ 29,70</span>
							</p>
							<p className="mt-3 flex items-center justify-between text-base-text">
								<span>Entrega</span> <span>R$ 3,50</span>
							</p>
							<p className="mt-3 flex items-center justify-between text-xl font-bold text-base-subtitle">
								<span>Total</span> <span>R$ 33,20</span>
							</p>
						</div>

						<button className="mt-6 w-full rounded-md bg-coffee-yellow py-3 font-bold uppercase text-white">
							Confirmar Pedido
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
