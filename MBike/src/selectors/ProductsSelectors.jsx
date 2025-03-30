import { createSelector } from 'reselect';




export const getProductsState = (state) => state.products;


export const selectProducts = createSelector(
    [getProductsState],
    (item)  => item.products
)

export const selectProductsStatus = createSelector(
    [getProductsState],
    (item)  => item.status
)


export const selectProductsErrors = createSelector(
    [getProductsState],
    (item)  => item.error
)


export const selectProductsPagination = createSelector(
    [getProductsState],
    (item)  => item.pagination
)
