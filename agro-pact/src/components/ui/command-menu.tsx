"use client";
import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import {
    AssignToIcon,
    BacklogIcon,
    NoPriorityIcon,
    ChangePriorityIcon,
    ChangeStatusIcon,
    DoneIcon,
    InProgressIcon,
    LabelIcon,
    PersonIcon,
    TodoIcon,
    UrgentIcon,
    HighIcon,
    MediumIcon,
    LowIcon,
    AddLabels,
} from "./icons/command-bar";

const commandOptions = [
    {
        label: "Assign farming to..",
        icon: AssignToIcon,
        subOptions: [
            { label: "Farmers near me", icon: PersonIcon },
            { label: "My favorite farmers", icon: PersonIcon },
            { label: "Search...", icon: PersonIcon },
        ],
    },
    {
        label: "Change contracted crop status...",
        icon: ChangeStatusIcon,
        subOptions: [
            { label: "Sowing (Planting)", icon: BacklogIcon },
            { label: "Fertilization", icon: TodoIcon },
            { label: "Harvesting", icon: InProgressIcon },
            { label: "Delivery", icon: DoneIcon },
        ],
    },
    {
        label: "Change contract priority...",
        icon: ChangePriorityIcon,
        subOptions: [
            { label: "Urgent", icon: UrgentIcon },
            { label: "High", icon: HighIcon },
            { label: "Medium", icon: MediumIcon },
            { label: "Low", icon: LowIcon },
        ],
    },
    {
        label: "Sort by labels...",
        icon: AddLabels,
        subOptions: [
            { label: "Trending", icon: () => <LabelIcon type="bug" /> },
            { label: "Seasonal", icon: () => <LabelIcon type="feature" /> },
            { label: "Latest", icon: () => <LabelIcon type="improvement" /> },
        ],
    },
] as const;

export const CommandMenu = () => {
    const [opened, setOpened] = useState(false);
    const [selectedOption, setSetSelectedOption] = useState<number | null>(null);
    const commandMenuRef = useRef<HTMLDivElement>(null);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const toggleCommandMenu = (e: MouseEvent) => {
            if (!commandMenuRef.current) return;
            const isMenuButton =
                e.target instanceof Element &&
                e.target.classList.contains("command-menu-button");
            const clickedOutside =
                !isMenuButton && !commandMenuRef.current?.contains(e.target as Node);

            setOpened(clickedOutside ? false : true);
            if (clickedOutside) setSearchValue("");
        };

        window.addEventListener("click", toggleCommandMenu);

        return () => {
            window.removeEventListener("click", toggleCommandMenu);
        };
    }, []);

    const currentOptions = useMemo(() => {
        const options =
            selectedOption === null
                ? commandOptions
                : commandOptions[selectedOption].subOptions;

        // If no search value is provided, we return all options.
        if (searchValue === "") return options;

        // If a search value is provided, we do a simple search based on that input.
        return [...options].filter((option) =>
            option.label.toLowerCase().includes(searchValue.toLowerCase())
        );
    }, [selectedOption, searchValue]);

    return (
        <div className={classNames(opened && "opened")} ref={commandMenuRef}>
            <div
                className={classNames(
                    "absolute flex justify-center w-[32rem] mx-4 -translate-x-1/2 flex-col items-start rounded-xl border border-transparent-white bg-transparent-white shadow-[#e4efe6_0px_7px_32px] transition-[transform,opacity] md:left-2/3",
                    opened && "opacity-100 md:translate-y-[0.4rem]",
                    !opened && " opacity-80"
                )}
            >
                <span className="ml-4 mt-2 bg-white/[0.05] px-2 text-xs leading-10 text-zinc-500">
                    Your Dashboard
                </span>
                <input
                    placeholder="Type a command or search..."
                    className="w-full bg-transparent px-5 py-3 text-lg outline-none"
                    value={searchValue}
                    onChange={(ev) => setSearchValue(ev.target.value)}
                />
                <div className="flex w-full flex-col text-sm text-off-white *:py-3">
                    {currentOptions.map(({ label, icon: Icon, ...menuItem }, index) => (
                        <button
                            key={label}
                            onClick={(ev) => {
                                const clickedRootItem = "subOptions" in menuItem;
                                setSetSelectedOption(clickedRootItem ? index : null);
                                setSearchValue("");
                                if (!clickedRootItem) {
                                    setOpened(false);
                                    // We stop propagation to prevent the click event from
                                    // bubbling up to the window and triggering toggleCommandMenu.
                                    // This should be prevented because if that funtion ran, it would
                                    // oterwise reopen the menu again, because it registers a click
                                    // INSIDE the menu.
                                    ev.stopPropagation();
                                }
                            }}
                            className="command-menu-button flex h-auto w-full items-center gap-3 px-5 first:bg-white/[0.15] hover:bg-white/[0.05]"
                        >
                            <Icon />
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};