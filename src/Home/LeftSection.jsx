import { useNavigate } from "react-router-dom"

const LeftSection = () => {
    const navigate = useNavigate()
    const categories = ["sports", "gaming", "politics", "cricket", "lifestyle"]
    return (
        <>
            <div class="w-1/3 ml-5" >
                <div class="py-2" style={{ height: "auto", border: '2px solid darkgray' }}>
                    <div class="rounded bg-white mb-4">
                        <div class="p-3 text-xxs font-semibold w-full">TRENDING TOPICS</div>
                        <div class="pb-4">
                            {
                                categories.map((cat, key) => {
                                    return (
                                        <div class="px-3 py-2" key={key} style={{ cursor: "pointer"}} onClick={()=>{console.log("clicked category");navigate("/category", { state: { categoryQuery : cat } });}}>
                                            <div class="flex">
                                                <img class="h-8 w-8 border rounded-full mr-2" src="https://icons.veryicon.com/png/o/commerce-shopping/icon-of-lvshan-valley-mobile-terminal/home-category.png" />
                                                <div class="flex flex-col font-medium">
                                                    <span class="text-xxs">{cat}</span>
                                                </div>
                                                <div class="flex ml-auto">
                                                    <p class="bg-blue-dark text-xs text-white font-semibold rounded px-4 ml-auto">SUBSCRIBE</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default LeftSection