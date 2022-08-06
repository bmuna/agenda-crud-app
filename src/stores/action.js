
export const addAgendaList = (data) => {
    return {
        type: "ADD_LIST",
        payload: data,
    };
};
 
export const editAgendaList = (data) => {
    return {
        type: "EDIT_LIST",
        payload: data,
    };
}
  export function deleteList(listId) {
    return  {
        type: "DELETE_LIST",
        payload: listId
    };
}