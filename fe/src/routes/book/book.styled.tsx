import styled from 'styled-components'

export const StyledBook = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;

    .cover {
        width: 200px;
        aspect-ratio: 2 / 3;
        border: 1px solid #aaa;
        border-radius: 5px;
        background-color: #fafafa;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        &:hover {
            transform: scale(1.05);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
    }

    .info {
        text-align: center;
        * {
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            overflow: hidden;
            color: #565959;
        }

        .title {
            cursor: pointer;
            text-decoration: none;
            color: #007185;
        }

        .author {
            color: #007185;
        }

        .price {
            color: #b12704;
        }
    }

    .order-button {
        display: inline-block;
        padding: 0.5em 1.5em;
        border: 0.1em solid #007185;
        margin: 0 0.3em 0.3em 0;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration: none;
        font-weight: 300;
        color: #ffffff;
        text-align: center;
        transition: all 0.2s;
        background-color: #007185;
        cursor: pointer;

        &:hover {
            color: #007185;
            background-color: #ffffff;
        }
    }
`
