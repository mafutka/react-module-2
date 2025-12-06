import css from "./Sidebar.module.css"

interface SidebarProps {
    onClose: () => void;
}

export default function Sidebar({onClose}: SidebarProps) {
    return (
        <div className={css.wrapper}>
            <div className={css.sidebar}>
                <button onClick={onClose} className={css.btn}>Close</button>
                <p>lkfjlfkjgjlakfglkaklgalkflgafnlannanvf

                </p>
            </div>
        </div>
    )
}