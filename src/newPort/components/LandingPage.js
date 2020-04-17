import React from 'react';
import '../styles/LandingPage.css';

const LandingPage = () => {
	return (
		<section className="landPage">
			<section>
				<center>
					<h2> How it works </h2>
				</center>

				<article className="landArticle1">
					<div>
						<h2>CREATE AN ACCOUNT</h2>
						<p>or login if you already have one. To get started, you have to own an account</p>
					</div>

					<div>
						<h2>FUND YOUR WALLET </h2>
						<p>
							Fund your wallet using any of these convenient payment methods. Bank Payment/Transfer,
							online Payment with your ATM card.
						</p>
					</div>

					<div>
						<h2>PLACE YOUR ORDER</h2>
						<p>
							All orders are processed immediately , All Recharge and Bill payment services vended will be
							delivered immediately.
						</p>
					</div>

					<div>
						<h2>INSTANT CASH-BACK </h2>
						<p>
							After successful transaction, CashBack Value will be sent to your CashBack
							wallet,withdrawable at any time to your Main wallet, eg Smart Earner CashBack for Glo is 5%
							i.e for Glo N1000 cashback wallet will be Credited with N50 NB: CashBack applies for all
							Recharge Services Except MTN SME DataShare because the Vending rate is Discounted, i.e No
							cashback Allocation for MTN SME DataShare.{' '}
						</p>
					</div>
				</article>
			</section>

			<section>
				<center>
					<h2> Virtual Top Up </h2>
					<h4 style={{ fontSize: 18, marginTop: -5 }}> Electronic vending of data and airtime </h4>
				</center>

				<article className="landArticle2">
					<div>
						<img src={require('../assets/bundle.png')} alt="data img" />
						<h3> Buy Data Bundle </h3>
						<p> Start enjoying this very low rates for your internet browsing databundle</p>

						<h6>Buy Now</h6>
					</div>

					<div>
						<img src={require('../assets/airtime.jpeg')} alt="airtime img" />
						<h3> Buy Airtime </h3>
						<p> Enjoy huge discount when you purchase airtime</p>

						<h6 style={{ marginTop: 40 }}>Buy Now</h6>
					</div>

					<div>
						<img src={require('../assets/tv.jpeg')} alt="cable img" />
						<h3> Cable TV Subscription </h3>
						<p>Instant recharge of DStv, GOtv and Startimes e.t.c.</p>

						<h6 style={{ marginTop: 40 }}>Pay Now</h6>
					</div>

					<div>
						<img src={require('../assets/electric.jpeg')} alt="data img" />
						<h3>Pay Electricity Bill </h3>
						<p>Pay your electricity bill online e.g. EEDC(PHCN), IKEDC(PHCN) e.t.c </p>

						<h6>Pay Now</h6>
					</div>
				</article>
			</section>

			<section className="landArticles3">
				<center>
					<h1>Buy Cheap MTN SME Data Bundle-1GB As low as N455</h1>
					<h3>(Works with all devices 60-90 Days Validity)</h3>
					<h5>Price Depends on your membership level</h5>
				</center>

				<div>
					<table>
						<tr>
							<th>
								Smart Earner <br /> (Reseller 1)
							</th>
							<th>
								Enterprise Earner <br />
								(PayPoint Agent/Reseller 2)
							</th>
							<th>
								AutoPilot Earner <br />
								(Portal Owner)
							</th>
							<th />
						</tr>
						<tr>
							<td>1GB = ₦470.00</td>
							<td>
								1GB = ₦470 <br />
								Level-1 : 490 | Level-2 : 480 | Level-3 : 470
							</td>
							<td>1GB = ₦455</td>
							<td>Buy Now</td>
						</tr>
						<tr>
							<td>2GB = ₦940.00</td>
							<td>
								2GB = ₦940 <br />
								Level-1 : 980 | Level-2 : 970 | Level-3 : 960
							</td>
							<td>2GB = ₦910</td>
							<td>Buy Now</td>
						</tr>
						<tr>
							<td>5GB = ₦2350.00</td>
							<td>
								5GB = ₦2350 <br />
								Level-1 : 2450 | Level-2 : 2400 | Level-3 : 2350
							</td>
							<td>5GB = ₦2275</td>
							<td>Buy Now</td>
						</tr>
					</table>
				</div>
			</section>

			<section>
				<center>
					<h2> DATA Pricing for Smart Earner (User) </h2>
				</center>

				<article className="landArticles4">
					<div style={{background: 'yellow', color: '#000' }}>
						<h2>MTN</h2>
						<hr />
						<p>₦180-500MB</p>
						<p>₦350-1GB</p>
						<p>₦700-2GB</p>
						<p>₦1050-3GB</p>
						<p>₦1750-5GB</p>
						<p>₦5600-20GB</p>
						<p>₦9200-40GB</p>
						<p>₦14000-75GB</p>
						<p>₦18500-110GB</p>
						<p>₦18500-74.9GB(2months)</p>
						<p>₦28000-120GB(2months)</p>
						<p>₦46000-150GB (3months)</p>
						<p>₦69000-250GB (3months)</p>
					</div>

				<div style={{background: 'red', color: '#fff' }} >
						<h2>AIRTEL</h2>
						<hr />

						<p>₦200-350MB (7days Validity)</p>
						<p>₦350-750MB (14days Validity)</p>
						<p>₦700-1.5GB</p>
						<p>₦850-2GB</p>
						<p>₦1100-3GB</p>
						<p>₦1400-4.5GB</p>
						<p>₦1800-6GB</p>
						<p>₦2200-8GB</p>
						<p>₦2800-11GB</p>
						<p>₦3600-15GB</p>
						<p>₦7000-40GB</p>
						<p>₦11000-75GB</p>
						<p>₦14000-110GB</p>
					</div>

					<div style={{background: 'rgba(71, 134, 8, 0.98)', color: "#000"}}>
						<h2>ETISALAT</h2>
						<hr />

						<p>₦450-2GB (3days)</p>
						<p>₦190-250MB (7days)</p>
						<p>₦450-1GB (7days)</p>
						<p>₦1350-7GB (7days)</p>
						<p>₦450-500MB (30days)</p>
						<p>₦600-1.5GB (SME)</p>
						<p>₦900-2GB (SME)</p>
						<p>₦900-1.5GB (Direct)</p>
						<p>₦1080-2GB</p>
						<p>₦1350-3GB </p>
						<p>₦1800-4.5GB </p>
						<p>₦3600-11GB </p>
						<p>₦4500-15GB </p>
						<p>₦9000-40GB  </p>
						<p>₦13500-75GB </p>
					</div>

					<div style={{background: 'green', color: '#fff'}}>
						<h2>GLO</h2>
						<hr />

						<p>₦300-1GB(SME)</p>
						<p>₦550-2GB(SME)</p>
						<p>₦1100-4.5GB(SME)</p>
						<p>₦2000-7.5GB(SME)</p>
						<p>₦2500-10GB(SME)</p>
						<p>₦450-1.05GB/800MB</p>
						<p>₦900-2.5GB/1.8GB</p>
						<p>₦1800-5.8GB/4.75GB</p>
						<p>₦2250-12GB/6.25GB</p>
						<p>₦2700-16.25GB/8.25GB</p>
						<p>₦3600-18.25GB/11.25GB</p>
						<p>₦4500-22GB/15.5GB</p>
						<p>₦7200-36GB/24GB</p>
						<p>₦9000-40GB</p>
						<p>₦11800-75GB</p>
						<p>₦16200-95GB</p>
						<p>₦18000-110GB</p>
					</div>
				</article>
			</section>
		</section>
	);
};
export default LandingPage;
