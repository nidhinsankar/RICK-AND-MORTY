
export const filterList = (list,value) => {
    return list.filter(character => character?.name.toLowerCase().includes(value.toLowerCase()))
}