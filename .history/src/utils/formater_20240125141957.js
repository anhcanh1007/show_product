export const formater = (number) => {
    return new Intl.NumberFormat("vi-VN", {
        style: "currency"
    })
}