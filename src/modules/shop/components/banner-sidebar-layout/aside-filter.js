import FilterCollections from "./filter-collections"
import FilterColors from "./filter-colors"
import FilterItem from "./filter-item"
import FilterSizes from "./filter-sizes"

function AsideFilter () {
    return (
        <aside className="aside__filter">
            <FilterItem title="collections">
                <FilterCollections />
            </FilterItem>
            <FilterItem title="sizes">
                <FilterSizes />
            </FilterItem>
            <FilterItem title="colors">
                <FilterColors />
            </FilterItem>
        </aside>
    )
}

export default AsideFilter