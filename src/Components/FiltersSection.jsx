

export default function FiltersSection({filter, setSearchParams}) {
    return (
        <section className="filters">
            <button
                type="button"
                className="filter"
                onClick={() => setSearchParams({ category: "women" })}
            >
                women
            </button>
            <button
                type="button"
                className="filter"
                onClick={() => setSearchParams({ category: "men" })}
            >
                men
            </button>
            <button
                type="button"
                className="filter"
                onClick={() => setSearchParams({ category: "watches" })}
            >
                watches
            </button>
            {filter && (
                <button type="button" className="filter" onClick={() => setSearchParams({})}>
                    view all
                </button>
            )}
        </section>
    )
}