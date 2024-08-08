import styled from 'styled-components'

export const StyledHome = styled.div`
    header {
        background: -webkit-radial-gradient(#0a99af, #057586);
        background: radial-gradient(#0a99af, #057586);
        box-sizing: border-box;
        color: #fff;
        height: 140px;
        line-height: 20px;
        padding-top: 6px;

        span {
            display: block;
            text-align: center;

            &.title {
                font-size: 61px;
                line-height: 1.2em;
                padding-top: 6px;
            }

            &.subtitle {
                font-size: 16px;
                line-height: 20px;
            }
        }
    }

    .books {
        padding: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

        couter-reset: book;
    }

    .book {
        position: relative;
        counter-increment: book;
        border: 1px solid #ddd;
        margin-left: -1px;
        margin-top: -1px;
        padding: 6rem;

        &:first-child {
            margin-left: 0;
            margin-top: 0;
        }

        &::after {
            content: '# ' counter(book);
            display: block;
            position: absolute;
            background-color: #c45500;
            color: #fff;
            font-size: 14px;
            line-height: 25px;
            padding: 0 16px 0 8px;
            clip-path: polygon(0 0, 0 100%, calc(100% - 8px) 100%, 100% 0);
            top: 0;
            left: 0;
        }

        .cover {
            margin: 0 auto;
            width: 100%;
            aspect-ratio: 2 / 3;
        }

        .info {
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
    }
`
