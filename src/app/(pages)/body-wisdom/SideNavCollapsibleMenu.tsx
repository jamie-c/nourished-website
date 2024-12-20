/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const titleToUrl = (title: string) => {
	let url = title.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase();
	if (url.endsWith("-")) url = url.slice(0, -1);
	if (url.startsWith("-")) url = url.slice(1);
	return url;
};

const SideNavCollapsibleMenu = ({
	sections,
	bodyWisdomCourseSections,
}: {
	sections: string[];
	bodyWisdomCourseSections: {
		uuid: string;
		title: string;
		sections: { uuid: string; title: string; content: string }[];
	}[];
}) => {
	const pathname = usePathname();
	const [loading, setLoading] = useState(false);
	const subMenuShownClassName = "max-h-96 min-h-fit";
	const subMenuHiddenClassName = "max-h-0 min-h-0";
	const [sectionsState, setSectionsState] = useState(sections);
	const [bodyWisdomCourseSectionsState, setBodyWisdomCourseSectionsState] =
		useState(bodyWisdomCourseSections);
	const [isExpanded, setIsExpanded] = useState(() => {
		const sectionIndex = sectionsState.findIndex((section) =>
			pathname.includes(titleToUrl(section)),
		);
		const newState = sectionsState.map(() => false);
		newState[sectionIndex] = true;
		return newState;
	});
	const [subMenuClassName, setSubMenuClassName] = useState(
		sectionsState.map(() => subMenuHiddenClassName),
	);
	const [active, setActive] = useState([[]] as boolean[][]);

	useEffect(() => {
		setActive(
			bodyWisdomCourseSectionsState.map((section) =>
				section.sections.map(() => false),
			),
		);
	}, [bodyWisdomCourseSectionsState]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const sectionIndex = sectionsState.findIndex((section) =>
			pathname.includes(titleToUrl(section)),
		);
		setIsExpanded((prev) => {
			const newState = [...prev];
			newState[sectionIndex] = true;
			return newState;
		});
	}, [pathname]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (!pathname) return;
		const sectionIndex = bodyWisdomCourseSectionsState?.findIndex((section) =>
			pathname.includes(titleToUrl(section.title)),
		);
		const subSectionIndex = bodyWisdomCourseSectionsState[
			sectionIndex
		]?.sections.findIndex((subSection) =>
			pathname.includes(titleToUrl(subSection.title)),
		);
		if (sectionIndex === -1) return;
		setActive((prev) => {
			const newState = [...prev];
			newState[sectionIndex] = prev[sectionIndex].map((subSection, index) => {
				return index === subSectionIndex;
			});
			return newState;
		});
		loading && setLoading(false);
	}, [pathname, bodyWisdomCourseSectionsState, sectionsState]);

	const toggleSubMenu = (index: number) => {
		setIsExpanded((prev) => {
			const newExpanded = [...prev];
			newExpanded[index] = !newExpanded[index];
			return newExpanded;
		});
	};

	return (
		<div className="w-md">
			<div
				className="
                    w-full
                    max-w-md
                    rounded-md
                    shadow-lg
                    shadow-slate-300
                    divide-y
                    divide-solid
                    divide-bluegreen-500
                "
			>
				{sectionsState?.map((section, index) => (
					<div
						key={`section-${index}`}
						className={`${
							isExpanded[index]
								? "divide-y divide-solid divide-brightgreen-500 "
								: ""
						}`}
					>
						<div
							className="
                                w-full
                                border-b-1
                                border-bluegreen-500
                                pt-3
                                pb-2
                                text-xl
                                text-bluegreen-500
                                font-transat-med
                                font-semibold
                                uppercase
                                cursor-pointer"
							onClick={() => toggleSubMenu(index)}
							onKeyDown={(event) => {
								if (event.key === "Enter") {
									toggleSubMenu(index);
								}
							}}
						>
							<span className="px-4">{section}</span>
						</div>
						{bodyWisdomCourseSectionsState[index]?.sections.map(
							(subSection, subIndex, subArray) => {
								if (subArray.length === 1) return null;
								const sectionUrl = titleToUrl(section);
								const subSectionUrl = titleToUrl(subSection.title);
								const url = `/body-wisdom/course-content/${sectionUrl}/${subSectionUrl}`;
								return (
									<div
										key={`sub-section-${subIndex}`}
										className={`${
											isExpanded[index]
												? subMenuShownClassName
												: subMenuHiddenClassName
										} flex flex-col overflow-hidden transition-all duration-500`}
									>
										<Link href={url} className="group">
											<div
												className="
                                                    group
                                                    relative
                                                    text-darkgreen-500
                                                    font-transat-light
                                                    font-light
                                                    normal-case
                                                    flex
                                                    flex-row
                                                    items-center
                                                    justify-start
                                                    gap-2
                                                    pt-2
                                                    pb-1
                                                    px-4
                                                "
											>
												<span
													className={`${
														active[index]?.[subIndex] ? "block " : "hidden "
													} 
                                                        group-hover:block
                                                        absolute
                                                        top-0
                                                        left-0
                                                        w-1
                                                        h-full
                                                        bg-bluegreen-500
                                                    `}
												/>
												<span
													className={`${
														active[index]?.[subIndex]
															? "bg-bluegreen-500 "
															: "bg-lightgreen-500 "
													}
                                                        text-white
                                                        group-hover:bg-bluegreen-500
                                                        rounded-full
                                                        font-transat
                                                        p-1
                                                        pt-2
                                                        w-6
                                                        h-6
                                                        min-w-6
                                                        max-w-6
                                                        min-h-6
                                                        max-h-6
                                                        inline-flex
                                                        items-center
                                                        justify-center
                                                        mb-1
                                                    `}
												>
													{subIndex + 1}
												</span>
												{subSection.title}
											</div>
										</Link>
									</div>
								);
							},
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default SideNavCollapsibleMenu;
