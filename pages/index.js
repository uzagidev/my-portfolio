import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import clientPromise from "../lib/mongodb";
import { getData } from "./api/page";
import NavBar from "../components/navbar";
import waveImage from "../public/images/wave.svg";
import TypeIt from "typeit-react";

import Fade from "react-reveal/Fade";
import Jello from "react-reveal/Jello";
import Flip from "react-reveal/Flip";
import Tada from "react-reveal/Tada";
import Zoom from "react-reveal/Zoom";
import Spin from "react-reveal/Spin";

export default function Home({ isConnected, data }) {
	const programmingLangs = [
		{
			name: "HTML",
			icon: "/images/icons/html.png",
		},
		{
			name: "CSS",
			icon: "/images/icons/css.png",
		},
		{
			name: "JS",
			icon: "/images/icons/javascript.png",
		},
		{
			name: "VueJS",
			icon: "/images/icons/vuejs.png",
		},
		{
			name: "ReactJS",
			icon: "/images/icons/reactjs.png",
		},
		{
			name: "C#",
			icon: "/images/icons/csharp.png",
		},
		{
			name: "PHP",
			icon: "/images/icons/php.png",
		},
	];
	return (
		<div>
			<Script
				strategy="lazyOnload"
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>

			<Script strategy="lazyOnload">
				{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
			</Script>
			<Head>
				<title>
					{(data && data.pageTitle) || process.env.DEFAULT_PAGE_TITLE}
				</title>
				<meta
					name="description"
					content={
						(data && data.description) || process.env.DEFAULT_DESCRIPTION
					}
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{!isConnected && (
				<div className="container mx-auto h-screen flex items-center justify-center font-bold">
					<h2>Oops! Something went wrong.</h2>
				</div>
			)}
			{isConnected && (
				// App Body
				<div className="app-body bg-primary-dark text-white h-screen custom-scrollbar">
					{/* Header */}
					<header className="app-header h-screen">
						<div className="container mx-auto h-full flex flex-col items-center justify-center">
							<div className="text-center text-4xl mb-6 font-roboto font-bold">
								<TypeIt
									options={{
										strings: ["Hi there!", "I'm Danh, a web coder."],
										waitUntilVisible: true,
									}}
								/>
							</div>
							<div className="text-center text-2xl show-up">
								<h4 className="">🚀Let's explore my home🚀</h4>
							</div>
						</div>
					</header>
					{/* End Header */}
					{/* Main */}
					<div>
						<Image src={waveImage} layout="responsive" quality={100} />
					</div>
					<main className="app-main min-h-full bg-inherit">
						{/* Section */}
						<div className="h-screen flex flex-col items-center justify-center code-background">
							<div className="text-center font-roboto font-bold w-2/3 md:w-1/2">
								<h4 className="text-2xl mb-2">
									<Flip left>🎓 What did I learn?</Flip>
								</h4>
								<div className="text-xl mb-4">
									<Fade bottom delay={500}>
										<p>
											I learned as a full-stack web developer with some
											languages and their frameworks.
										</p>
									</Fade>
								</div>
								<div className="flex flex-row flex-wrap items-center justify-around">
									{programmingLangs.map((lang) => (
										<Tada delay={2000}>
											<div className="m-2">
												<Image
													src={lang.icon}
													width={64}
													height={64}
													quality={100}
												/>
											</div>
										</Tada>
									))}
								</div>
							</div>
						</div>
						{/* End Section */}
						{/* Section */}
						<div className="h-screen flex flex-col items-center justify-center circle-background">
							<div className="text-center font-roboto font-bold w-2/3 md:w-1/2">
								<h4 className="text-2xl mb-2">
									<Flip left>💼 About my job</Flip>
								</h4>
								<div className="text-xl mb-4">
									<Fade bottom delay={500}>
										<p>
											Currently, I'm working with{" "}
											<span className="bg-gray-900">.NET</span> <br /> in Ho Chi
											Minh City, VN.
										</p>
									</Fade>
								</div>
							</div>
						</div>
						{/* End Section */}
						{/* Section */}
						<div className="h-screen flex flex-col items-center justify-center relative">
							<div className="text-center font-roboto font-bold w-2/3 md:w-1/2">
								<h4 className="text-2xl mb-8">
									<Flip left>🎈 Contact with me</Flip>
								</h4>
								<div className="text-xl mb-4">
									<Zoom delay={500}>
										<p className="mb-4">See my projects at:</p>
									</Zoom>
									<Spin delay={600}>
										<a
											href="https://github.com/baodanhit"
											className="w-16 h-16 block mx-auto rounded-full shadow-[0_0_30px] shadow-blue-500/50 hover:shadow-purple-500/50">
											<Image
												src="/images/icons/github.png"
												width={64}
												height={64}
												quality={100}
											/>
										</a>
									</Spin>
									<Zoom delay={1000}>
										<p className="mb-4">
											or view my profile on social network:{" "}
										</p>
									</Zoom>
									<Spin delay={1100}>
										<a
											href="https://facebook.com/baodanhit"
											className="w-16 h-16 block mx-auto rounded-full shadow-[0_0_30px] shadow-blue-500/50 hover:shadow-purple-500/50">
											<Image
												src="/images/icons/facebook.png"
												width={64}
												height={64}
												quality={100}
											/>
										</a>
									</Spin>
								</div>
							</div>
							{/* Footer */}
							<div className="w-full absolute bottom-10 left-0">
								<Flip left>
									<h4 className="text-center text-lg text-gray-500 font-roboto font-bold">
										Make with{" "}
										<a href="https://nextjs.org/" className="text-cyan-500">
											nextjs
										</a>{" "}
										and a little ❤️
									</h4>
								</Flip>
							</div>
							{/* End Footer */}
							<div className="h-4 w-full absolute bottom-0 left-0 rgb-shadow"></div>
						</div>
						{/* End Section */}
					</main>
					{/* End Main */}
				</div>
				// End App Body
			)}
		</div>
	);
}

export async function getServerSideProps(context) {
	try {
		// client.db() will be the default database passed in the MONGODB_URI
		// You can change the database by calling the client.db() function and specifying a database like:
		// const db = client.db("myDatabase");
		// Then you can execute queries against your database like so:
		// db.find({}) or any of the MongoDB Node Driver commands
		await clientPromise;
		const res = await getData();

		return {
			props: { isConnected: true, data: res },
		};
	} catch (e) {
		console.error(e);
		return {
			props: { isConnected: false },
		};
	}
}
