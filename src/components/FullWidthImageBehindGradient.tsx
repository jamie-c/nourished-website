/* eslint-disable @next/next/no-img-element */

interface InnerProps {
	children: React.ReactNode;
}

const InnerProps: React.FC<InnerProps> = ({ children }) => {
	return (
		<div className="absolute w-full h-full flex flex-row items-center content-center text-white text-4xl sm:text-6xl md:text-7xl pt-10">
			{children}
		</div>
	);
};

interface OuterProps {
	variant: string;
	imageUrl?: string;
	align?: string;
	children?: React.ReactNode;
}

type gradientColorsType = {
	[key: string]: string;
};

const FullWidthImageBehindGradient: React.FC<OuterProps> = ({
	variant,
	imageUrl,
	align,
	children,
}) => {
	const colors: gradientColorsType = {
		primary:
			"from-bluegreen-500 via-bluegreen-500 via-10% to-transparent to-75% dark:from-darkgreen-700 dark:via-darkgreen-500 dark:via-10% dark:to-transparent",
		secondary:
			"from-brightgreen-500 via-brightgreen-500 via-10% to-transparent to-75% dark:from-brightgreen-700 dark:via-brightgreen-500 dark:via-10% dark:to-transparent",
		tertiary:
			"from-lightgreen-500 via-lightgreen-500 via-10% to-transparent to-75% dark:from-lightgreen-700 dark:via-lightgreen-500 dark:via-10% dark:to-transparent",
		dark: "from-darkgreen-500 via-darkgreen-500 via-50% to-transparent to-95% dark:from-darkgreen-700 dark:via-darkgreen-500 dark:via-50% dark:to-transparent dark:to-95%",
		white: "white",
		transparent: "transparent",
	};
	const aligns = [
		"left",
		"center",
		"right",
		"top",
		"bottom",
		"left-top",
		"right-top",
		"left-bottom",
		"right-bottom",
	];
	const color = colors[variant] ? colors[variant] : colors.primary;

	interface imageClassNamesType {
		[key: string]: string;
	}

	const imageClassBase = "absolute inset-0 w-full h-full object-cover";

	const imageClassNames: imageClassNamesType = {
		top: `${imageClassBase} object-top`,
		right: `${imageClassBase} object-right`,
		bottom: `${imageClassBase} object-bottom`,
		left: `${imageClassBase} object-left`,
		center: `${imageClassBase} object-center`,
		"left-top": `${imageClassBase} object-left-top`,
		"right-top": `${imageClassBase} object-right-top`,
		"left-bottom": `${imageClassBase} object-left-bottom`,
		"right-bottom": `${imageClassBase} object-right-bottom`,
	};

	let imageClassName = "";

	if (align && aligns.includes(align)) {
		imageClassName = imageClassNames[align];
	} else {
		imageClassName = imageClassNames.center;
	}

	return (
		<div className="relative h-screen-2/3 w-full">
			<img
				className={imageClassName}
				src={imageUrl || "/images/headers/NourishedCoJamieandLindsey-04.jpg"}
				width="100%"
				height="auto"
				alt="Jamie and Lindsey Conway"
				loading="eager"
			/>
			<div
				className={`absolute inset-0 bg-gradient-to-b opacity-75 ${color}`}
			/>
			<InnerProps>{children}</InnerProps>
		</div>
	);
};

export default FullWidthImageBehindGradient;
