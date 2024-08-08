import { NextFunction, Request, Response } from 'express'
// import prisma from '../db/client'
import mockData from '../../mocks/mockData'
import ErrorHandler from '../utils/ErrorHandler'

export const getAllBooks = async (_: Request, res: Response) => {
    // const books = await prisma.book.findMany()
    return res.status(200).json({ books: mockData })
}

export const getUniqueBook = async (
    req: Request,
    res: Response,
    _next: NextFunction
) => {
    const book = mockData.find((book) => book.id === +req.params.id)

    if (!book) throw new ErrorHandler('Book not found', 404)

    const delay = Math.random() * 4000
    setTimeout(() => {
        return res.status(200).json({ book })
    }, delay)
}

const purchase = async (id: number) => {
    const book = mockData.find((book) => book.id === +id)

    if (!book) throw new ErrorHandler('Book not found', 404)

    if (book.availableStock < 1) {
        throw new ErrorHandler(
            `Book '${book.title}' is currently out of stock`,
            400
        )
    }

    book.availableStock -= 1
}

export const purchaseBook = async (req: Request, res: Response) => {
    const purchaseChance = Math.random()
    if (purchaseChance < 0.2)
        throw new ErrorHandler(
            'Unable to complete purchase, please try again later.',
            500
        )

    const book = await purchase(+req.params.id)
    return res.status(200).send({ message: 'Purchase successful', book })
}
