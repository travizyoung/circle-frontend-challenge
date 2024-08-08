export const generateRandomCover = () => {
    const randomIndex = Math.floor(Math.random() * 10)
    return `https://picsum.photos/id/${randomIndex}/200/300`
}
