export const setName = ({ prop, value }) => {
    return {
        type: "Save",
        payload: { prop, value }
    }
}