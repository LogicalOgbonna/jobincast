const searchSplitter = (previousSearch) => {
    const updatedSearchParams = {}
    previousSearch.split(";").forEach(value => {
        if(!value.length) return
        if (value.includes("==")) {
            const spited = value.split("==");
            if (spited[0] === "jobTitle" || spited[0] === "title" || spited[0] === "fullName") {
                updatedSearchParams[spited[0]] = spited[1].replace(/\*/g, "")
            } else {
                updatedSearchParams[spited[0]] = [spited[1]]
            }
        }
        else {
            const spited = value.split("=in=");
            if (spited[0] === "jobTitle" || spited[0] === "title" || spited[0] === "fullName") {
                updatedSearchParams[spited[0]] = spited[1].replace(/\*/g, "")
            } else {
                updatedSearchParams[spited[0]] = spited[1].replace(/\(|\)/g, "").split(",")
            }
        }

    })

    return updatedSearchParams
}

export default searchSplitter